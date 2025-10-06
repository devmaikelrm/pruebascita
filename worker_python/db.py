import os
import psycopg2
from psycopg2 import pool
from psycopg2.extras import RealDictCursor
from datetime import datetime, timedelta
from typing import Optional, List, Dict, Any

class DatabaseManager:
    def __init__(self):
        database_url = os.getenv('DATABASE_URL')
        if not database_url:
            raise ValueError('DATABASE_URL environment variable is required')
        
        self.connection_pool = psycopg2.pool.SimpleConnectionPool(
            1, 10,
            database_url,
            cursor_factory=RealDictCursor
        )
        
    def get_connection(self):
        return self.connection_pool.getconn()
    
    def return_connection(self, conn):
        self.connection_pool.putconn(conn)
    
    def get_pending_queue_items(self) -> List[Dict[str, Any]]:
        conn = self.get_connection()
        try:
            with conn.cursor() as cur:
                cur.execute("""
                    SELECT q.*, c.name, c.username, c.password
                    FROM queue q
                    JOIN clients c ON q.client_id = c.id
                    WHERE q.status = 'pending' AND c.is_active = true
                    ORDER BY q.created_at ASC
                """)
                return cur.fetchall()
        finally:
            self.return_connection(conn)
    
    def get_client(self, client_id: str) -> Optional[Dict[str, Any]]:
        conn = self.get_connection()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM clients WHERE id = %s", (client_id,))
                return cur.fetchone()
        finally:
            self.return_connection(conn)
    
    def get_client_preferences(self, client_id: str) -> Optional[Dict[str, Any]]:
        conn = self.get_connection()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM preferences WHERE client_id = %s", (client_id,))
                return cur.fetchone()
        finally:
            self.return_connection(conn)
    
    def is_in_cooldown(self, type_: str, identifier: str) -> bool:
        conn = self.get_connection()
        try:
            with conn.cursor() as cur:
                cur.execute("""
                    SELECT COUNT(*) as count FROM cooldowns 
                    WHERE type = %s AND identifier = %s AND expires_at > NOW()
                """, (type_, identifier))
                result = cur.fetchone()
                return result['count'] > 0
        finally:
            self.return_connection(conn)
    
    def add_cooldown(self, type_: str, identifier: str, reason: str, hours: int = 2):
        conn = self.get_connection()
        try:
            with conn.cursor() as cur:
                expires_at = datetime.now() + timedelta(hours=hours)
                cur.execute("""
                    INSERT INTO cooldowns (type, identifier, reason, expires_at)
                    VALUES (%s, %s, %s, %s)
                """, (type_, identifier, reason, expires_at))
                conn.commit()
        finally:
            self.return_connection(conn)
    
    def update_queue_item(self, queue_id: str, **kwargs):
        conn = self.get_connection()
        try:
            with conn.cursor() as cur:
                set_clause = ', '.join([f"{k} = %s" for k in kwargs.keys()])
                values = list(kwargs.values()) + [queue_id]
                cur.execute(f"UPDATE queue SET {set_clause} WHERE id = %s", values)
                conn.commit()
        finally:
            self.return_connection(conn)
    
    def create_appointment(self, client_id: str, service_type: str, 
                          appointment_date: datetime, appointment_time: str,
                          confirmation_data: Dict = None,
                          screenshot_before_path: str = None,
                          screenshot_after_path: str = None):
        conn = self.get_connection()
        try:
            with conn.cursor() as cur:
                cur.execute("""
                    INSERT INTO appointments 
                    (client_id, service_type, appointment_date, appointment_time,
                     confirmation_data, screenshot_before_path, screenshot_after_path, status)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, 'confirmed')
                    RETURNING id
                """, (client_id, service_type, appointment_date, appointment_time,
                     psycopg2.extras.Json(confirmation_data) if confirmation_data else None,
                     screenshot_before_path, screenshot_after_path))
                result = cur.fetchone()
                conn.commit()
                return result['id']
        finally:
            self.return_connection(conn)
    
    def cleanup_expired_cooldowns(self):
        conn = self.get_connection()
        try:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM cooldowns WHERE expires_at <= NOW()")
                deleted = cur.rowcount
                conn.commit()
                return deleted
        finally:
            self.return_connection(conn)
    
    def close(self):
        self.connection_pool.closeall()
