import Link from 'next/link';

const Footer = () => {
  return (
    <div className='text-xs text-zinc-500 flex gap-3 fixed inset-x-0 bottom-0 w-screen justify-center '>
      <Link href='/login'>© 2024</Link>
      <Link href='/login'>Условия Threads</Link>
      <Link href='/login'>Политика конфиденциальности</Link>
      <Link href='/login'>Политику в отношении файлов cookie</Link>
      <Link href='/login'>Настройки файлов cookie</Link>
      <Link href='/login'>Сообщить о проблеме</Link>
    </div>
  );
};

export default Footer;
