'use client';
import search from './search.svg';
import dotsIcon from './dots.svg';
import like from './like2.png';
import comment from './comment.png';
import repost from './repost.png';
import share from './share.png';
import { useState } from 'react';
import storage from '@/core/storage';
import { FC } from 'react';
import { Thread } from '@/core/types/thread';

type Props = {
  posts: Thread[];
};

const Accounts: FC<Props> = (props) => {
  return (
    <div className='text-black flex flex-col bg-white max-h-max overflow-auto'>
      <div className='text-gray-400 size-xs'>Рекомендуемые подписки</div>
      <div className='flex flex-col items-start mt-1.5 pl-1.5 cursor-pointer'>
        {Array.isArray(props.posts) &&
          props.posts.map((post) => (
            <div key={post.id}>
              <div className='flex pt-4'>
                <div className='flex items-start '>
                  <img
                    className='w-9 h-9 rounded-full bg-contain'
                    style={{ backgroundImage: `url(${post.avatar})` }}
                  />
                </div>
                <div className='flex flex-col'>
                  <div className='flex items-center'>
                    <div className='flex flex-col content-center ml-3 text-sm w-96'>
                      <div className='font-bold hover:underline'>
                        {post.username}
                      </div>
                      <div className='text-gray-400'>{post.name}</div>
                    </div>
                    <button className='border rounded-xl px-4 py-1.5 size-xs ml-auto font-medium'>
                      Подписаться
                    </button>
                  </div>
                  <div className='flex items-center border-b text-black ml-3 py-1.5'>
                    {post.date} подписчиков
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const Posts: FC<Props> = (props) => {
  return (
    <div>
      <div className='w-full text-black flex items-center justify-center space-x-1.5 p-1.5'>
        <button className='w-1/2 border rounded-xl px-3 py-1.5 size-xs focus:text-white focus:bg-black'>
          Топ
        </button>
        <button className='w-1/2 border rounded-xl px-3 py-1.5 size-xs focus:text-white focus:bg-black '>
          Недавнее
        </button>
      </div>
      <div className='w-full max-h-max flex flex-col items-center gap-4 text-black py-1'>
        {Array.isArray(props.posts) &&
          props.posts.map((post) => (
            <div
              key={post.id}
              className='flex py-3 gap-3 px-6 border-b'
              // style={{
              //   width: '600px',
              //   height: '600px',
              // }}
            >
              <div>
                <div
                  className='w-9 h-9 rounded-full bg-contain'
                  style={{ backgroundImage: `url(${post.avatar})` }}
                ></div>
              </div>
              <div>
                <div className='flex items-start'>
                  <div className='mr-auto flex'>
                    <div className='font-semibold mr-2.5'>{post.username}</div>
                    <div className='text-gray-300'>{post.date}d.</div>
                  </div>
                  <div className='text-gray-300 w-5 h-5 cursor-pointer flex items-center justify-center rounded-full duration-75 hover:bg-zinc-100'>
                    <img src={dotsIcon} height={13} width={13} alt='dots' />
                  </div>
                </div>
                <div className='h-auto'>{post.text}</div>
                <div className='mt-2 rounded-lg '>
                  <img
                    src={post.image}
                    style={{ borderRadius: '10px' }}
                    height={400}
                    width={400}
                    alt='ост'
                  ></img>
                </div>
                <div className='flex gap-6'>
                  <button className='flex justify-center items-center w-10 h-10 mt-2 text-lg cursor-pointer rounded-full px-2.5 py-0 hover:bg-zinc-100'>
                    <img src={like} height={20} width={20} alt='like'></img>
                  </button>
                  <button className='flex justify-center items-center w-10 h-10 mt-2 text-lg cursor-pointer rounded-full px-2.5 py-0 hover:bg-zinc-100'>
                    <img
                      src={comment}
                      height={18}
                      width={18}
                      alt='comments'
                    ></img>
                  </button>
                  <button className='flex justify-center items-center w-10 h-10 mt-2 text-lg cursor-pointer rounded-full px-2.5 py-0 hover:bg-zinc-100'>
                    <img src={repost} height={18} width={18} alt='repost'></img>
                  </button>
                  <button className='flex justify-center items-center w-10 h-10 mt-2 text-lg cursor-pointer rounded-full px-2.5 py-0 hover:bg-zinc-100'>
                    <img src={share} height={18} width={18} alt='share'></img>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const Search: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [posts] = useState<Thread[]>(storage.threads);

  return (
    <div className='rounded-xl bg-white max-h-max px-6'>
      <div className='flex items-center p-2 rounded-3xl border border-gray-200 bg-gray-50 my-3.5'>
        <img src={search} height={20} width={20} alt='search' />
        <input
          className='w-full text-base text-gray-500 ml-3.5 bg-gray-50 outline-none border-none'
          type='text'
          name=''
          placeholder='Search'
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
      {!searchValue ? <Accounts posts={posts} /> : <Posts posts={posts} />}
    </div>
  );
};

export default Search;
