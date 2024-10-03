import { Header } from '@/components';
import styles from './styles.module.css';
import { faker } from '@faker-js/faker';
import Image from 'next/image';

export default function Profile() {
  return (
    <div>
      <Header />
      <main>
        <div className={styles.header}>
          <div>
            <div className={styles.name}>{faker.person.fullName()}</div>
            <div>{faker.internet.userName()}</div>
          </div>
          <div>
            <div className={styles.avatar}>
              <Image
                src={faker.image.avatar()}
                height={84}
                width={84}
                alt='avatar'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
