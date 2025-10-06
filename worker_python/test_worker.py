#!/usr/bin/env python3
import os
import sys
from dotenv import load_dotenv

load_dotenv()

def test_imports():
    print("Testing imports...")
    try:
        import undetected_chromedriver as uc
        print("✅ undetected-chromedriver imported successfully")
    except ImportError as e:
        print(f"❌ Failed to import undetected-chromedriver: {e}")
        return False
    
    try:
        import psycopg2
        print("✅ psycopg2 imported successfully")
    except ImportError as e:
        print(f"❌ Failed to import psycopg2: {e}")
        return False
    
    try:
        from db import DatabaseManager
        print("✅ DatabaseManager imported successfully")
    except ImportError as e:
        print(f"❌ Failed to import DatabaseManager: {e}")
        return False
    
    try:
        from booking_adapter import BookingAdapter
        print("✅ BookingAdapter imported successfully")
    except ImportError as e:
        print(f"❌ Failed to import BookingAdapter: {e}")
        return False
    
    return True

def test_database_connection():
    print("\nTesting database connection...")
    
    database_url = os.getenv('DATABASE_URL')
    if not database_url:
        print("❌ DATABASE_URL environment variable not set")
        return False
    
    print(f"✅ DATABASE_URL is configured")
    
    try:
        from db import DatabaseManager
        db = DatabaseManager()
        print("✅ DatabaseManager initialized successfully")
        
        conn = db.get_connection()
        print("✅ Database connection established")
        
        with conn.cursor() as cur:
            cur.execute("SELECT COUNT(*) as count FROM clients")
            result = cur.fetchone()
            client_count = result['count'] if result else 0
            print(f"✅ Query executed successfully - Found {client_count} clients")
        
        db.return_connection(conn)
        db.close()
        print("✅ Database connection closed successfully")
        
        return True
        
    except Exception as e:
        print(f"❌ Database connection failed: {e}")
        return False

def test_chrome_driver():
    print("\nTesting Chrome driver initialization...")
    
    try:
        import undetected_chromedriver as uc
        from selenium.webdriver.chrome.options import Options
        import subprocess
        import shutil
        
        chromium_path = subprocess.check_output(['which', 'chromium']).decode().strip()
        if not chromium_path:
            chromium_path = '/nix/store/zi4f80l169xlmivz8vja8wlphq74qqk0-chromium-125.0.6422.141/bin/chromium'
        
        writable_driver_path = None
        try:
            chromedriver_nix = subprocess.check_output(['which', 'chromedriver']).decode().strip()
            writable_driver_path = '/tmp/chromedriver'
            if not os.path.exists(writable_driver_path):
                shutil.copy2(chromedriver_nix, writable_driver_path)
                os.chmod(writable_driver_path, 0o755)
        except Exception as e:
            print(f"Could not setup writable chromedriver: {e}")
        
        options = uc.ChromeOptions()
        options.binary_location = chromium_path
        options.add_argument('--headless=new')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--disable-gpu')
        
        print(f"Initializing Chrome driver...")
        print(f"  Chromium: {chromium_path}")
        print(f"  ChromeDriver: {writable_driver_path}")
        driver = uc.Chrome(
            options=options,
            driver_executable_path=writable_driver_path,
            use_subprocess=False,
            version_main=None
        )
        print("✅ Chrome driver initialized successfully")
        
        driver.get('https://www.google.com')
        print(f"✅ Navigated to Google - Page title: {driver.title[:30]}...")
        
        driver.quit()
        print("✅ Chrome driver closed successfully")
        
        return True
        
    except Exception as e:
        print(f"❌ Chrome driver test failed: {e}")
        print("Note: Chrome/Chromium must be installed on the system")
        return False

def main():
    print("=" * 60)
    print("Worker Python - Undetected ChromeDriver Test Suite")
    print("=" * 60)
    
    results = []
    
    results.append(("Imports", test_imports()))
    
    results.append(("Database Connection", test_database_connection()))
    
    results.append(("Chrome Driver", test_chrome_driver()))
    
    print("\n" + "=" * 60)
    print("Test Results Summary")
    print("=" * 60)
    
    for test_name, passed in results:
        status = "✅ PASSED" if passed else "❌ FAILED"
        print(f"{test_name}: {status}")
    
    all_passed = all(result[1] for result in results)
    
    print("\n" + "=" * 60)
    if all_passed:
        print("✅ All tests passed! Worker is ready to run.")
        print("\nTo start the worker:")
        print("  python worker_python/undetected_worker.py")
    else:
        print("❌ Some tests failed. Please fix the issues above.")
        sys.exit(1)
    print("=" * 60)

if __name__ == '__main__':
    main()
