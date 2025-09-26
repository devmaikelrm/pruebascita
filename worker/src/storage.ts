import { promises as fs } from 'fs';
import path from 'path';

export class StorageManager {
  private screenshotDir = 'screenshots';

  constructor() {
    this.ensureDirectories();
  }

  /**
   * Ensure required directories exist
   */
  private async ensureDirectories(): Promise<void> {
    try {
      await fs.mkdir(this.screenshotDir, { recursive: true });
    } catch (error) {
      console.error('Error creating directories:', error);
    }
  }

  /**
   * Save screenshot with compression
   */
  async saveScreenshot(buffer: Buffer, filename: string): Promise<string> {
    const filepath = path.join(this.screenshotDir, filename);
    
    try {
      // Lazy import sharp; if not available, fallback to raw write
      const { default: sharp } = await import('sharp');
      const compressedBuffer = await sharp(buffer)
        .png({ quality: 80, compressionLevel: 6 })
        .toBuffer();
      await fs.writeFile(filepath, compressedBuffer);
    } catch (e) {
      console.warn('[storage] sharp not available, saving raw screenshot');
      await fs.writeFile(filepath, buffer);
    }
    return filepath;
  }

  /**
   * Clean up old screenshots
   */
  async cleanupOldScreenshots(maxAgeMs: number = 7 * 24 * 60 * 60 * 1000): Promise<void> {
    try {
      const files = await fs.readdir(this.screenshotDir);
      const now = Date.now();

      for (const file of files) {
        const filepath = path.join(this.screenshotDir, file);
        const stats = await fs.stat(filepath);
        
        if (now - stats.mtime.getTime() > maxAgeMs) {
          await fs.unlink(filepath);
          console.log(`Cleaned up old screenshot: ${file}`);
        }
      }
    } catch (error) {
      console.error('Error cleaning up screenshots:', error);
    }
  }
}
