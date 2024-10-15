import iglogo from './threads-logo.png';
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
      <nav className='w-screen min-h-12 bg-gray-50'>
        <div className='w-full flex items-center content-between inset-x-0 bottom-0'>
          <Image src={iglogo} width={60} height={60} alt='logo'></Image>
          <ul className='flex-1 list-none text-center'>
            <Link href='/'>
              <button className='inline-block rounded-lg hover:bg-zinc-100 py-4 px-8 cursor-pointer'>
                <Image src={home} width={25} height={25} alt='home'></Image>
              </button>
            </Link>
            <Link href='/search'>
              <button className='inline-block rounded-lg hover:bg-zinc-100 py-4 px-8 cursor-pointer'>
                <Image src={search} width={25} height={25} alt='home'></Image>
              </button>
            </Link>
            <button className='inline-block rounded-lg hover:bg-zinc-100 py-4 px-8 cursor-pointer'>
              <Image src={post} width={25} height={25} alt='home'></Image>
            </button>
            <button className='inline-block rounded-lg hover:bg-zinc-100 py-4 px-8 cursor-pointer'>
              <Image src={like} width={25} height={25} alt='home'></Image>
            </button>
            <Link href='/profile'>
              <button className='inline-block rounded-lg hover:bg-zinc-100 py-4 px-8 cursor-pointer'>
                <Image src={human} width={25} height={25} alt='home'></Image>
              </button>
            </Link>
          </ul>
          <div className='rounded-xl bg-black text-white py-1 px-5 cursor-pointer'>
            <Link href='/login'> Log in </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
