import iglogo from './threads-logo.png';
import home from './home.png';
import human from './human.png';
import like from './like.png';
import search from './search.png';
import post from './post.png';
import { Link } from 'react-router-dom';
import Modal from '../modal-post/modal-post';
import { useState } from 'react';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header>
      <nav className='min-h-12 bg-gray-50'>
        <div className='flex items-center content-between px-3 pr-5'>
          <img src={iglogo} width={60} height={60} alt='logo'></img>
          <ul className='flex-1 list-none text-center'>
            <Link to='/'>
              <button className='inline-block rounded-lg hover:bg-zinc-100 py-4 px-8 cursor-pointer'>
                <img src={home} width={25} height={25} alt='home'></img>
              </button>
            </Link>
            <Link to='/search'>
              <button className='inline-block rounded-lg hover:bg-zinc-100 py-4 px-8 cursor-pointer'>
                <img src={search} width={25} height={25} alt='home'></img>
              </button>
            </Link>
            <button
              className='inline-block rounded-lg hover:bg-zinc-100 py-4 px-8 cursor-pointer'
              onClick={() => setShowModal(true)}
            >
              <img src={post} width={25} height={25} alt='home'></img>
            </button>
            <button className='inline-block rounded-lg hover:bg-zinc-100 py-4 px-8 cursor-pointer'>
              <img src={like} width={25} height={25} alt='home'></img>
            </button>
            <Link to='/profile'>
              <button className='inline-block rounded-lg hover:bg-zinc-100 py-4 px-8 cursor-pointer'>
                <img src={human} width={25} height={25} alt='home'></img>
              </button>
            </Link>
          </ul>
          <div className='rounded-xl bg-black text-white py-1 px-5 cursor-pointer'>
            <Link to='/login'> Log in </Link>
          </div>
        </div>
      </nav>
      {showModal && (
        <div>
          <Modal onClose={() => setShowModal(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
