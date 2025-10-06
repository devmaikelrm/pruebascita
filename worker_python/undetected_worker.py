#!/usr/bin/env python3
import os
import sys
import time
import random
from datetime import datetime
from dotenv import load_dotenv

from db import DatabaseManager
from booking_adapter import BookingAdapter

load_dotenv()

class UndetectedWorker:
    def __init__(self):
        self.db = DatabaseManager()
        self.adapter = None
        self.is_processing = False
        
        self.check_min_minutes = int(os.getenv('CHECK_MIN_MINUTES', '6'))
        self.check_max_minutes = int(os.getenv('CHECK_MAX_MINUTES', '10'))
        self.cooldown_hours = int(os.getenv('COOLDOWN_HOURS', '2'))
        
    def process_queue(self):
        if self.is_processing:
            print('Queue processing already in progress, skipping...')
            return
        
        self.is_processing = True
        
        try:
            pending_items = self.db.get_pending_queue_items()
            
            if not pending_items:
                print('No pending queue items found')
                return
            
            print(f'Processing {len(pending_items)} queue items...')
            
            for queue_item in pending_items:
                try:
                    self.process_queue_item(queue_item)
                    
                    delay = 30 + random.random() * 60
                    print(f'Waiting {int(delay)}s before next client...')
                    time.sleep(delay)
                    
                except Exception as e:
                    print(f"Error processing queue item {queue_item['id']}: {e}")
                    
                    self.db.update_queue_item(
                        queue_item['id'],
                        status='failed',
                        attempts=queue_item['attempts'] + 1,
                        last_attempt=datetime.now(),
                        error=str(e)
                    )
                    continue
                    
        finally:
            self.is_processing = False
            
            if self.adapter:
                self.adapter.cleanup()
                self.adapter = None
    
    def process_queue_item(self, queue_item):
        print(f"Processing queue item {queue_item['id']} for client {queue_item['name']}")
        
        client = self.db.get_client(queue_item['client_id'])
        if not client:
            raise Exception('Client not found')
        
        preferences = self.db.get_client_preferences(queue_item['client_id'])
        
        is_cooldown = self.db.is_in_cooldown('account', client['username'])
        if is_cooldown:
            print(f"Client {client['name']} is in cooldown, skipping...")
            return
        
        self.db.update_queue_item(
            queue_item['id'],
            status='processing',
            last_attempt=datetime.now()
        )
        
        try:
            if not self.adapter:
                self.adapter = BookingAdapter(self.db)
            
            result = self.adapter.process_booking(client, preferences)
            
            if result['success']:
                self.db.create_appointment(
                    client_id=client['id'],
                    service_type=preferences.get('service_type', 'dni_habana') if preferences else 'dni_habana',
                    appointment_date=result['appointment_date'],
                    appointment_time=result['appointment_time'],
                    confirmation_data=result.get('confirmation_data'),
                    screenshot_before_path=result.get('screenshot_before_path'),
                    screenshot_after_path=result.get('screenshot_after_path')
                )
                
                self.db.update_queue_item(
                    queue_item['id'],
                    status='completed',
                    last_attempt=datetime.now()
                )
                
                print(f"✅ Appointment booked successfully for {client['name']}")
                
            else:
                error = result.get('error', '')
                
                if 'blocked' in error.lower() or 'error-cita' in error.lower():
                    self.db.add_cooldown(
                        'account',
                        client['username'],
                        'system_block',
                        self.cooldown_hours
                    )
                    print(f"❄️ Added cooldown for client {client['name']}: {error}")
                    
                    self.db.update_queue_item(
                        queue_item['id'],
                        status='failed',
                        attempts=queue_item['attempts'] + 1,
                        last_attempt=datetime.now(),
                        error=error
                    )
                    
                elif any(phrase in error.lower() for phrase in ['no available', 'no time blocks', 'discovery mode']):
                    min_delay = self.check_min_minutes * 60 * 1000
                    max_delay = self.check_max_minutes * 60 * 1000
                    delay_ms = min_delay + random.random() * (max_delay - min_delay)
                    next_attempt = datetime.fromtimestamp(time.time() + delay_ms / 1000)
                    
                    self.db.update_queue_item(
                        queue_item['id'],
                        status='pending',
                        attempts=queue_item['attempts'] + 1,
                        last_attempt=datetime.now(),
                        next_attempt=next_attempt,
                        error=error
                    )
                    print(f"🔁 Re-scheduled queue item for {client['name']} (reason: {error})")
                    
                else:
                    self.db.update_queue_item(
                        queue_item['id'],
                        status='failed',
                        attempts=queue_item['attempts'] + 1,
                        last_attempt=datetime.now(),
                        error=error
                    )
                
                print(f"❌ Booking not completed for {client['name']}: {error}")
                
        except Exception as e:
            print(f"Error during booking process for {client['name']}: {e}")
            raise
    
    def cleanup_expired_cooldowns(self):
        try:
            deleted = self.db.cleanup_expired_cooldowns()
            if deleted > 0:
                print(f"Cleaned up {deleted} expired cooldowns")
        except Exception as e:
            print(f"Error cleaning up cooldowns: {e}")
    
    def get_next_run_delay(self):
        min_delay = max(1, self.check_min_minutes) * 60
        max_delay = max(min_delay, self.check_max_minutes * 60)
        return min_delay + random.random() * (max_delay - min_delay)
    
    def run(self):
        print('Spanish Consular Worker (Python + Undetected ChromeDriver) starting...')
        print(f'Queue processing every {self.check_min_minutes}-{self.check_max_minutes} minutes with human-like jitter...')
        
        last_cleanup = time.time()
        
        while True:
            try:
                print(f'\n[{datetime.now().strftime("%Y-%m-%d %H:%M:%S")}] Running appointment booking cycle...')
                self.process_queue()
                
                current_time = time.time()
                if current_time - last_cleanup >= 3600:
                    print('Running cleanup tasks...')
                    self.cleanup_expired_cooldowns()
                    last_cleanup = current_time
                
                delay = self.get_next_run_delay()
                print(f'Next appointment cycle in {int(delay/60)} minutes...\n')
                time.sleep(delay)
                
            except KeyboardInterrupt:
                print('\nWorker shutting down gracefully...')
                if self.adapter:
                    self.adapter.cleanup()
                self.db.close()
                sys.exit(0)
                
            except Exception as e:
                print(f'Error in processing cycle: {e}')
                time.sleep(60)

def main():
    worker = UndetectedWorker()
    worker.run()

if __name__ == '__main__':
    main()
