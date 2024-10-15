'use client';
import { Content, Header } from '@/components';
import { faker } from '@faker-js/faker';
import Image from 'next/image';
import MoreIcon from './more-icon';
import InstagramIcon from './instagram-icon';
import { useEffect, useState } from 'react';
import { httpClient, Profile, Thread } from '@/core';

export default function ProfilePageWidget() {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    httpClient<Profile>('/api/profile')
      .then((response) => response.data)
      .then(setProfile);

    httpClient<Thread[]>('/api/threads')
      .then((response) => response.data)
      .then(setThreads);
  }, []);

  if (!profile) {
    return null;
  }

  return (
    <div>
      <Header />
      <main
        style={{ minHeight: 'calc(100vh - 60px)' }}
        className='bg-gray-50 pt-4'
      >
        <div
          className='my-0 mx-auto max-w-xl bg-white rounded-xl border-[0.5px] border-neutral-300 w-[596px] p-6'
          style={{ boxShadow: 'rgba(0, 0, 0, 0.04) 0px 0px 12px 0px' }}
        >
          <div className='flex justify-between items-center'>
            <div>
              <div className='text-2xl font-bold '>{profile.name}</div>
              <div className='flex gap-1 text-sm items-center'>
                {profile.username}
                <div className='bg-gray-100 text-gray-400 text-[11px] rounded-3xl text-center px-2 py-1'>
                  threads.net
                </div>
              </div>
            </div>

            <div>
              <div className='rounded-[50%] truncate bg-gray-50'>
                <Image
                  src={profile.avatar}
                  height={84}
                  width={84}
                  alt='avatar'
                />
              </div>
            </div>
          </div>

          <div className='pt-4 pb-[12px] text-sm font-normal'>
            {profile.bio.slice(0, 150)}
          </div>

          <div className='flex justify-between'>
            <div className='pb-3 text-gray-400 text-[15px] font-light flex'>
              {profile.followers} followers
              <span className='px-[6px]'>·</span>
              {profile.username}
            </div>
            <div className='flex gap-3'>
              <InstagramIcon />
              <MoreIcon />
            </div>
          </div>

          <div className='flex justify-center py-4 gap-[10px]'>
            <button className='bg-black text-white text-[15px] grow px-4 border rounded-[10px] border-black p-[5px]'>
              Follow
            </button>
            <button className='bg-white text-black text-[15px] grow px-4 border rounded-[10px] p-[5px]'>
              Mention
            </button>
          </div>

          <div>
            <Content />
          </div>
        </div>
      </main>
    </div>
  );
}
