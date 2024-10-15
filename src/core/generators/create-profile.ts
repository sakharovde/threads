import { faker } from '@faker-js/faker';
import { Profile } from '../interfaces/profile';

export default (): Profile => ({
  id: faker.database.mongodbObjectId(),
  avatar: faker.image.avatar(),
  username: faker.internet.displayName(),
  name: faker.internet.userName(),
  bio: faker.lorem.words({ min: 200, max: 240 }),
  followers: faker.number.int({ min: 0, max: 200 }),
});
