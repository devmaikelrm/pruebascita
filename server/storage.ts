import { createDatabaseStorage } from '@repo/shared/storage';
import type { IStorage } from '@repo/shared/storage';
import { db } from './db';

export type { IStorage } from '@repo/shared/storage';

export const storage: IStorage = createDatabaseStorage(db);
