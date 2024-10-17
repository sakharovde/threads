export type { Thread } from './interfaces/thread';
export type { Profile } from './interfaces/profile';

import threadsStorage from './storage/threads';
import httpClient from './http-client';
import profileStorage from './storage/profile';

export const storage = {
  threads: threadsStorage,
  profile: profileStorage,
};

export { httpClient };
