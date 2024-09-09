import iglogo from './threads-logo.png';
import styles from './header.module.css';
import home from './home.png';
import human from './human.png';
import like from './like.png';
import search from './search.png';
import post from './post.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className={styles.container}>
        <div className={styles.nav}>
          <Image src={iglogo} alt='logo'></Image>

          <ul className={styles.ul}>
            <button className={styles.btn}>
              <Image src={home} alt='home'></Image>
            </button>
            <button className={styles.btn}>
              <Image src={search} alt='home'></Image>
            </button>
            <button className={styles.btn}>
              <Image src={post} alt='home'></Image>
            </button>
            <button className={styles.btn}>
              <Image src={like} alt='home'></Image>
            </button>
            <button className={styles.btn}>
              <Image src={human} alt='home'></Image>
            </button>
          </ul>

          <div className={styles.login}>
            <Link href='/login'> Log in </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
