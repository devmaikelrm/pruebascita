import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
import time
import random
import os
import json
from datetime import datetime
from typing import Dict, Optional, Tuple

class BookingAdapter:
    def __init__(self, db_manager):
        self.db = db_manager
        self.driver = None
        self.wait = None
        
    def init_driver(self):
        import subprocess
        import shutil
        
        try:
            chromium_path = subprocess.check_output(['which', 'chromium']).decode().strip()
        except:
            chromium_path = '/nix/store/zi4f80l169xlmivz8vja8wlphq74qqk0-chromium-125.0.6422.141/bin/chromium'
        
        writable_driver_path = None
        try:
            chromedriver_nix = subprocess.check_output(['which', 'chromedriver']).decode().strip()
            writable_driver_path = '/tmp/chromedriver'
            os.makedirs('/tmp', exist_ok=True)
            if not os.path.exists(writable_driver_path):
                shutil.copy2(chromedriver_nix, writable_driver_path)
                os.chmod(writable_driver_path, 0o755)
        except Exception as e:
            print(f"Could not setup writable chromedriver: {e}")
        
        options = uc.ChromeOptions()
        options.binary_location = chromium_path
        options.add_argument('--start-maximized')
        options.add_argument('--disable-blink-features=AutomationControlled')
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-gpu')
        
        self.driver = uc.Chrome(
            options=options,
            driver_executable_path=writable_driver_path,
            use_subprocess=False,
            version_main=None
        )
        self.wait = WebDriverWait(self.driver, 20)
        
    def human_delay(self, min_sec=0.5, max_sec=2.0):
        time.sleep(min_sec + random.random() * (max_sec - min_sec))
    
    def random_mouse_movement(self):
        try:
            body = self.driver.find_element(By.TAG_NAME, 'body')
            actions = ActionChains(self.driver)
            
            for _ in range(random.randint(2, 5)):
                x_offset = random.randint(-100, 100)
                y_offset = random.randint(-100, 100)
                actions.move_to_element_with_offset(body, x_offset, y_offset)
                actions.pause(random.uniform(0.1, 0.3))
            
            actions.perform()
        except Exception as e:
            print(f"Random mouse movement error (not critical): {e}")
    
    def take_screenshot(self, stage: str, client_id: str) -> str:
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        filename = f"screenshots/{client_id}_{stage}_{timestamp}.png"
        os.makedirs('screenshots', exist_ok=True)
        self.driver.save_screenshot(filename)
        return filename
    
    def navigate_to_widget_from_start(self):
        print("[Adapter] Starting full navigation flow from government portal...")
        START_URL = 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx'
        
        self.driver.get(START_URL)
        self.human_delay(3, 5)
        self.random_mouse_movement()
        
        try:
            accept_button = self.wait.until(
                EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Aceptar')]"))
            )
            self.human_delay(1, 2)
            accept_button.click()
            self.human_delay(1, 2)
        except:
            print("No cookie banner or already accepted")
        
        country_select = Select(self.wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "select[aria-label*='Países']"))
        ))
        self.human_delay(1, 2)
        self.random_mouse_movement()
        country_select.select_by_visible_text('Cuba')
        self.human_delay(2, 4)
        
        category_select = Select(self.wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "select[aria-label*='Categorías']"))
        ))
        self.human_delay(1, 2)
        self.random_mouse_movement()
        category_select.select_by_visible_text('Certificados')
        self.human_delay(2, 4)
        
        delegation_select = Select(self.wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "select[aria-label*='Delegaciones']"))
        ))
        self.human_delay(1, 2)
        self.random_mouse_movement()
        delegation_select.select_by_value('166')
        self.human_delay(2, 4)
        
        service_select = Select(self.wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "select[aria-label*='Servicios consulares']"))
        ))
        self.human_delay(1, 2)
        self.random_mouse_movement()
        service_select.select_by_visible_text('Certificado de nacimiento')
        self.human_delay(2, 4)
        
        search_button = self.wait.until(
            EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Buscar')]"))
        )
        self.human_delay(1, 2)
        self.random_mouse_movement()
        search_button.click()
        self.human_delay(4, 6)
        
        appointment_link = self.wait.until(
            EC.element_to_be_clickable((By.PARTIAL_LINK_TEXT, "Solicitar certificación de Nacimiento para DNI"))
        )
        self.human_delay(1, 2)
        self.random_mouse_movement()
        
        original_window = self.driver.current_window_handle
        appointment_link.click()
        self.human_delay(2, 3)
        
        for window_handle in self.driver.window_handles:
            if window_handle != original_window:
                self.driver.switch_to.window(window_handle)
                break
        
        print("[Adapter] Switched to popup window")
        self.human_delay(3, 5)
    
    def handle_welcome_modal(self):
        try:
            self.human_delay(1, 2)
            
            accept_texts = ['continuar', 'continue', 'aceptar', 'accept', 'ok']
            
            for text in accept_texts:
                try:
                    button = self.driver.find_element(
                        By.XPATH, 
                        f"//button[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '{text}')]"
                    )
                    if button.is_displayed():
                        print(f"Found welcome modal button with text: {text}")
                        self.human_delay(0.5, 1)
                        self.random_mouse_movement()
                        button.click()
                        self.human_delay(1, 2)
                        return
                except:
                    continue
            
            print("No welcome modal detected")
        except Exception as e:
            print(f"Error handling welcome modal: {e}")
    
    def select_first_available_slot(self) -> Optional[Dict]:
        try:
            print("[Adapter] Looking for available appointment slots...")
            self.human_delay(2, 4)
            
            calendar_days = self.driver.find_elements(
                By.CSS_SELECTOR,
                ".calendar-day.active, .day.available, td.day:not(.disabled)"
            )
            
            for day in calendar_days:
                if 'disabled' not in day.get_attribute('class'):
                    self.human_delay(0.5, 1)
                    self.random_mouse_movement()
                    day.click()
                    self.human_delay(1, 2)
                    
                    try:
                        time_slots = self.driver.find_elements(
                            By.CSS_SELECTOR,
                            ".time-slot.available, .slot.available, button.time-button:not(.disabled)"
                        )
                        
                        if time_slots:
                            slot = random.choice(time_slots[:3])
                            slot_time = slot.text
                            
                            self.human_delay(0.5, 1)
                            self.random_mouse_movement()
                            slot.click()
                            self.human_delay(1, 2)
                            
                            print(f"Selected slot: {slot_time}")
                            return {
                                'time': slot_time,
                                'date': day.get_attribute('data-date') or day.text
                            }
                    except:
                        continue
            
            print("No available slots found")
            return None
            
        except Exception as e:
            print(f"Error selecting slot: {e}")
            return None
    
    def perform_login(self, username: str, password: str) -> bool:
        try:
            print(f"[Adapter] Performing login for {username}...")
            
            username_field = self.wait.until(
                EC.presence_of_element_located((
                    By.XPATH,
                    "//input[@type='text' or @type='email' or contains(@name, 'user') or contains(@id, 'user')]"
                ))
            )
            self.human_delay(0.5, 1)
            self.random_mouse_movement()
            
            for char in username:
                username_field.send_keys(char)
                time.sleep(random.uniform(0.05, 0.15))
            
            self.human_delay(0.5, 1)
            
            password_field = self.driver.find_element(By.XPATH, "//input[@type='password']")
            self.random_mouse_movement()
            
            for char in password:
                password_field.send_keys(char)
                time.sleep(random.uniform(0.05, 0.15))
            
            self.human_delay(1, 2)
            
            submit_button = self.driver.find_element(
                By.XPATH,
                "//button[@type='submit'] | //input[@type='submit'] | //button[contains(text(), 'Enviar') or contains(text(), 'Login') or contains(text(), 'Entrar')]"
            )
            self.random_mouse_movement()
            submit_button.click()
            
            self.human_delay(3, 5)
            return True
            
        except Exception as e:
            print(f"Login error: {e}")
            return False
    
    def process_booking(self, client: Dict, preferences: Optional[Dict] = None) -> Dict:
        try:
            print(f"[Adapter] Starting booking process for {client['name']}")
            
            if not self.driver:
                self.init_driver()
            
            self.navigate_to_widget_from_start()
            
            self.handle_welcome_modal()
            
            slot = self.select_first_available_slot()
            if not slot:
                return {
                    'success': False,
                    'error': 'No available appointment slots found'
                }
            
            discovery_mode = os.getenv('DISCOVERY_MODE', 'true').lower() == 'true'
            
            screenshot_before = self.take_screenshot('before', client['id'])
            
            if discovery_mode:
                print("[Adapter] Discovery mode enabled - stopping after slot selection")
                return {
                    'success': False,
                    'error': 'Discovery mode - manual follow-up required',
                    'screenshot_before_path': screenshot_before,
                    'slot_info': slot
                }
            
            login_success = self.perform_login(client['username'], client['password'])
            if not login_success:
                return {
                    'success': False,
                    'error': 'Login failed'
                }
            
            screenshot_after = self.take_screenshot('after', client['id'])
            
            self.human_delay(2, 4)
            
            return {
                'success': True,
                'appointment_date': datetime.now(),
                'appointment_time': slot['time'],
                'screenshot_before_path': screenshot_before,
                'screenshot_after_path': screenshot_after,
                'confirmation_data': slot
            }
            
        except Exception as e:
            print(f"[Adapter] Booking failed: {e}")
            return {
                'success': False,
                'error': str(e)
            }
    
    def cleanup(self):
        if self.driver:
            try:
                self.driver.quit()
            except:
                pass
            self.driver = None
