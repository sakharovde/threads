import { faker } from '@faker-js/faker';
import { Thread } from '..';

const getThreads = () => {
  const threads: Thread[] = Array(20)
    .fill({
      id: '',
      avatar: '',
      username: '',
      date: '',
      text: '',
      image: '',
    })
    .map(() => ({
      id: faker.database.mongodbObjectId(),
      avatar: faker.image.avatar(),
      username: faker.internet.displayName(),
      date: faker.number.int({ min: 1, max: 10 }),
      text: faker.lorem.paragraph(),
      image: faker.image.urlLoremFlickr(),
    }));

  return threads;
};

export default getThreads;
