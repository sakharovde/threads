import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='text-xs text-zinc-500 flex gap-3 fixed inset-x-0 bottom-0 w-screen justify-center '>
      <Link to='/login'>© 2024</Link>
      <Link to='/login'>Условия Threads</Link>
      <Link to='/login'>Политика конфиденциальности</Link>
      <Link to='/login'>Политику в отношении файлов cookie</Link>
      <Link to='/login'>Настройки файлов cookie</Link>
      <Link to='/login'>Сообщить о проблеме</Link>
    </div>
  );
};

export default Footer;
