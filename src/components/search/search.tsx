'use client';
import search from './search.svg';
import avatar from './avatar.jpg';
import dotsIcon from './dots.svg';
import like from './like2.png';
import comment from './comment.png';
import repost from './repost.png';
import share from './share.png';
import { useEffect, useState } from 'react';
import { httpClient, storage, Thread } from '@/core';
import { FC } from 'react';

const Accounts = () => {
  return (
    <div className='text-black flex flex-col bg-white max-h-max overflow-auto'>
      <div className='text-gray-400 size-xs'>Рекомендуемые подписки</div>
      <div className='flex items-start mt-1.5 pl-1.5 cursor-pointer'>
        <div className='flex content-center'>
          <img
            className='rounded-full'
            src={avatar}
            height={36}
            width={36}
            alt='avatar'
          />
        </div>
        <div className='w-full border-b flex '>
          <div className='w-full flex flex-col content-center ml-3 text-sm'>
            <div className='font-bold hover:underline'>anastaaashen</div>
            <div className='text-gray-400'>Анастасия</div>
            <div className='text-black my-1'>99 подписчиков</div>
          </div>
          <div className='text-black flex items-center justify-center'>
            <button className='border rounded-xl px-4 py-1.5 size-xs'>
              Подписаться
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-start mt-1.5 pl-1.5 cursor-pointer'>
        <div className='flex content-center'>
          <img
            className='rounded-full'
            src={avatar}
            height={36}
            width={36}
            alt='avatar'
          />
        </div>
        <div className='w-full border-b flex '>
          <div className='w-full flex flex-col content-center ml-3 text-sm'>
            <div className='font-bold hover:underline'>kirill23</div>
            <div className='text-gray-400'>Кирилл</div>
            <div className='text-black my-1'>99 подписчиков</div>
          </div>
          <div className='text-black flex items-center justify-center'>
            <button className='border rounded-xl px-4 py-1.5 size-xs'>
              Подписаться
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-start mt-1.5 pl-1.5 cursor-pointer'>
        <div className='flex content-center'>
          <img
            className='rounded-full'
            src={avatar}
            height={36}
            width={36}
            alt='avatar'
          />
        </div>
        <div className='w-full border-b flex '>
          <div className='w-full flex flex-col content-center ml-3 text-sm'>
            <div className='font-bold hover:underline'>anastaaashen</div>
            <div className='text-gray-400'>Анастасия</div>
            <div className='text-black my-1'>99 подписчиков</div>
          </div>
          <div className='text-black flex items-center justify-center'>
            <button className='border rounded-xl px-4 py-1.5 size-xs'>
              Подписаться
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-start mt-1.5 pl-1.5 cursor-pointer'>
        <div className='flex content-center'>
          <img
            className='rounded-full'
            src={avatar}
            height={36}
            width={36}
            alt='avatar'
          />
        </div>
        <div className='w-full border-b flex '>
          <div className='w-full flex flex-col content-center ml-3 text-sm'>
            <div className='font-bold hover:underline'>Airy45</div>
            <div className='text-gray-400'>Айри</div>
            <div className='text-black my-1'>99 подписчиков</div>
          </div>
          <div className='text-black flex items-center justify-center'>
            <button className='border rounded-xl px-4 py-1.5 size-xs'>
              Подписаться
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-start mt-1.5 pl-1.5 cursor-pointer'>
        <div className='flex content-center'>
          <img
            className='rounded-full'
            src={avatar}
            height={36}
            width={36}
            alt='avatar'
          />
        </div>
        <div className='w-full border-b flex '>
          <div className='w-full flex flex-col content-center ml-3 text-sm'>
            <div className='font-bold hover:underline'>anastaaashen</div>
            <div className='text-gray-400'>Анастасия</div>
            <div className='text-black my-1'>99 подписчиков</div>
          </div>
          <div className='text-black flex items-center justify-center'>
            <button className='border rounded-xl px-4 py-1.5 size-xs'>
              Подписаться
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-start mt-1.5 pl-1.5 cursor-pointer'>
        <div className='flex content-center'>
          <img
            className='rounded-full'
            src={avatar}
            height={36}
            width={36}
            alt='avatar'
          />
        </div>
        <div className='w-full border-b flex '>
          <div className='w-full flex flex-col content-center ml-3 text-sm'>
            <div className='font-bold hover:underline'>anasta</div>
            <div className='text-gray-400'>Вася</div>
            <div className='text-black my-1'>99 подписчиков</div>
          </div>
          <div className='text-black flex items-center justify-center'>
            <button className='border rounded-xl px-4 py-1.5 size-xs'>
              Подписаться
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-start mt-1.5 pl-1.5 cursor-pointer'>
        <div className='flex content-center'>
          <img
            className='rounded-full'
            src={avatar}
            height={36}
            width={36}
            alt='avatar'
          />
        </div>
        <div className='w-full border-b flex '>
          <div className='w-full flex flex-col content-center ml-3 text-sm'>
            <div className='font-bold hover:underline'>toprig</div>
            <div className='text-gray-400'>Андрей</div>
            <div className='text-black my-1'>99 подписчиков</div>
          </div>
          <div className='text-black flex items-center justify-center'>
            <button className='border rounded-xl px-4 py-1.5 size-xs'>
              Подписаться
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-start mt-1.5 pl-1.5 cursor-pointer'>
        <div className='flex content-center'>
          <img
            className='rounded-full'
            src={avatar}
            height={36}
            width={36}
            alt='avatar'
          />
        </div>
        <div className='w-full border-b flex '>
          <div className='w-full flex flex-col content-center ml-3 text-sm'>
            <div className='font-bold hover:underline'>agton</div>
            <div className='text-gray-400'>Антон</div>
            <div className='text-black my-1'>99 подписчиков</div>
          </div>
          <div className='text-black flex items-center justify-center'>
            <button className='border rounded-xl px-4 py-1.5 size-xs'>
              Подписаться
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-start mt-1.5 pl-1.5 cursor-pointer'>
        <div className='flex content-center'>
          <img
            className='rounded-full'
            src={avatar}
            height={36}
            width={36}
            alt='avatar'
          />
        </div>
        <div className='w-full border-b flex '>
          <div className='w-full flex flex-col content-center ml-3 text-sm'>
            <div className='font-bold hover:underline'>agton</div>
            <div className='text-gray-400'>Антон</div>
            <div className='text-black my-1'>99 подписчиков</div>
          </div>
          <div className='text-black flex items-center justify-center'>
            <button className='border rounded-xl px-4 py-1.5 size-xs'>
              Подписаться
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-start mt-1.5 pl-1.5 cursor-pointer'>
        <div className='flex content-center'>
          <img
            className='rounded-full'
            src={avatar}
            height={36}
            width={36}
            alt='avatar'
          />
        </div>
        <div className='w-full border-b flex '>
          <div className='w-full flex flex-col content-center ml-3 text-sm'>
            <div className='font-bold hover:underline'>agton</div>
            <div className='text-gray-400'>Антон</div>
            <div className='text-black my-1'>99 подписчиков</div>
          </div>
          <div className='text-black flex items-center justify-center'>
            <button className='border rounded-xl px-4 py-1.5 size-xs'>
              Подписаться
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-start mt-1.5 pl-1.5 cursor-pointer'>
        <div className='flex content-center'>
          <img
            className='rounded-full'
            src={avatar}
            height={36}
            width={36}
            alt='avatar'
          />
        </div>
        <div className='w-full border-b flex '>
          <div className='w-full flex flex-col content-center ml-3 text-sm'>
            <div className='font-bold hover:underline'>agton</div>
            <div className='text-gray-400'>Антон</div>
            <div className='text-black my-1'>99 подписчиков</div>
          </div>
          <div className='text-black flex items-center justify-center'>
            <button className='border rounded-xl px-4 py-1.5 size-xs'>
              Подписаться
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-start mt-1.5 pl-1.5 cursor-pointer'>
        <div className='flex content-center'>
          <img
            className='rounded-full'
            src={avatar}
            height={36}
            width={36}
            alt='avatar'
          />
        </div>
        <div className='w-full border-b flex '>
          <div className='w-full flex flex-col content-center ml-3 text-sm'>
            <div className='font-bold hover:underline'>agton</div>
            <div className='text-gray-400'>Антон</div>
            <div className='text-black my-1'>99 подписчиков</div>
          </div>
          <div className='text-black flex items-center justify-center'>
            <button className='border rounded-xl px-4 py-1.5 size-xs'>
              Подписаться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

type Props = {
  posts: Thread[];
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
                <div className='mt-2 rounded-lg'>
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
      {!searchValue ? <Accounts /> : <Posts posts={posts} />}
    </div>
  );
};

export default Search;
