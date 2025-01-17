import createProfile from './generators/create-profile';
import getSubscribers from './generators/get-subscribers';
import getThreads from './generators/get-threads';

const profile = createProfile();
const threads = getThreads();
const subscribers = getSubscribers();
const subscriptions = getSubscribers();

const storage = {
  threads,
  profile,
  subscribers,
  subscriptions,
};

export default storage;
