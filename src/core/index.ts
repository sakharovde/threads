export type { Thread } from './interfaces/thread';
export type { Profile } from './interfaces/profile';

import threadsStorage from './storage/threads';
import profileStorage from './storage/profile';

export const storage = {
  threads: threadsStorage,
  profile: profileStorage,
};
