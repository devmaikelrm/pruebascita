import { createDatabaseStorage } from '@repo/shared/storage';
import type { IStorage } from '@repo/shared/storage';
import { db } from './db.js';

export const storage: IStorage = createDatabaseStorage(db);
