'use client';
import like from './like2.png';
import comment from './comment.png';
import repost from './repost.png';
import share from './share.png';
import dotsIcon from './dots.svg';
import Image from 'next/image';
import { httpClient, Thread } from '@/core';
import { FC, useEffect, useState } from 'react';

const Content: FC = () => {
  const [posts, setPosts] = useState<Thread[]>([]);

  useEffect(() => {
    httpClient<Thread[]>('/api/threads')
      .then((response) => response.data)
      .then(setPosts);
  }, []);

  return (
    <div className='flex flex-col items-center bg-white text-black rounded-xl'>
      {Array.isArray(posts) &&
        posts.map((post) => (
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
                  <Image src={dotsIcon} height={13} width={13} alt='dots' />
                </div>
              </div>
              <div className='h-auto'>{post.text}</div>
              <div className='w-full mt-2'>
                <Image
                  className='rounded-lg'
                  src={post.image}
                  style={{ borderRadius: '10px' }}
                  height={600}
                  width={600}
                  alt='ост'
                ></Image>
              </div>
              <div className='flex gap-6'>
                <button className='flex justify-center items-center w-10 h-10 mt-2 text-lg cursor-pointer rounded-full px-2.5 py-0 hover:bg-zinc-100'>
                  <Image src={like} height={20} width={20} alt='like'></Image>
                </button>
                <button className='flex justify-center items-center w-10 h-10 mt-2 text-lg cursor-pointer rounded-full px-2.5 py-0 hover:bg-zinc-100'>
                  <Image
                    src={comment}
                    height={20}
                    width={20}
                    alt='comments'
                  ></Image>
                </button>
                <button className='flex justify-center items-center w-10 h-10 mt-2 text-lg cursor-pointer rounded-full px-2.5 py-0 hover:bg-zinc-100'>
                  <Image
                    src={repost}
                    height={20}
                    width={20}
                    alt='repost'
                  ></Image>
                </button>
                <button className='flex justify-center items-center w-10 h-10 mt-2 text-lg cursor-pointer rounded-full px-2.5 py-0 hover:bg-zinc-100'>
                  <Image src={share} height={20} width={20} alt='share'></Image>
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Content;
