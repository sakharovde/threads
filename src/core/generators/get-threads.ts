import { faker } from '@faker-js/faker';
import { Thread } from '../types/thread';

const getThreads = () => {
  const threads: Thread[] = Array(20)
    .fill({
      id: '',
      avatar: '',
      username: '',
      name: '',
      date: '',
      text: '',
      image: '',
    })
    .map(() => ({
      id: faker.database.mongodbObjectId(),
      avatar: faker.image.avatar(),
      username: faker.internet.displayName(),
      name: faker.person.firstName(),
      date: faker.number.int({ min: 1, max: 10 }),
      text: faker.lorem.paragraph(),
      image: faker.image.urlLoremFlickr(),
    }));

  return threads;
};

export default getThreads;
