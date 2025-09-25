// Reuse storage implementation from server with database access
import { DatabaseStorage } from '../../server/storage.js';

export const storage = new DatabaseStorage();