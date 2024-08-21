import styles from './styles.module.css';
import Image from 'next/image';
import logo from './ig-logo-135.png';
import Link from 'next/link';

export default function Login() {

  return (
    <div className={styles.root}> 
        <div className={styles.container}>
            <div className={styles.box}>Как вы хотите использовать Threads?</div>
            <div className={styles.box1}>
                <div className={styles.boxTitle}>
                    <div>Продолжить с аккаунтом Instagram</div>
                    <Image src={logo} alt='Logo'></Image>
                </div>
                <div className={styles.mini}>Войдите в профиль Threads или создайте его через аккаунт Instagram. Вы сможете публиковать контент в Threads и взаимодейтсвовать с ним.</div>
            </div>
            <div className={styles.box1} >
            <div className={styles.boxTitle}>Использовать без профиля</div>
                <div className={styles.mini}>Вы можете пользоваться Threads без профиля, но тогда вы не сможете публиковать контент и взаимодейтсвовать с ним.</div>
            </div>
            <div className={styles.blok}>
                <Link href='/login'>© 2024</Link>
                <Link href='/login'>Условия Threads</Link>
                <Link href='/login'>Политика конфиденциальности</Link>
                <Link href='/login'>Политику в отношении файлов cookie</Link>
                <Link href='/login'>Настройки файлов cookie</Link>
                <Link href='/login'>Сообщить о проблеме</Link>

             </div>
        </div>
    </div>
  );
}
