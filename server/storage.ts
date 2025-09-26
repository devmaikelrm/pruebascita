import { createDatabaseStorage } from '@repo/shared/storage';
import type { DatabaseStorage, IStorage } from '@repo/shared/storage';
import { db } from './db';

export { DatabaseStorage, IStorage } from '@repo/shared/storage';

export const storage: IStorage = createDatabaseStorage(db);
