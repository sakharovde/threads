import { faker } from '@faker-js/faker';
import { Subscriber } from '../types/subscriber';

const getSubscribers = () => {
  const subscribers: Subscriber[] = Array(
    faker.number.int({ min: 1, max: 356 })
  )
    .fill({
      id: '',
      avatar: '',
      username: '',
      name: '',
    })
    .map(() => ({
      id: faker.database.mongodbObjectId(),
      avatar: faker.image.avatar(),
      username: faker.internet.displayName(),
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    }));

  return subscribers;
};

export default getSubscribers;
