export type { Thread } from './get-threads';
import threadsStorage from './storage/threads';
import httpClient from './http-client';

export const storage = {
  threads: threadsStorage,
};

export { httpClient };
