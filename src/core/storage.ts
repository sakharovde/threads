import createProfile from './generators/create-profile';
import getThreads from './generators/get-threads';

const profile = createProfile();
const threads = getThreads();

const storage = {
  threads,
  profile,
};

export default storage;
