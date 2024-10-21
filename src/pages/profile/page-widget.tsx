'use client';
import { Container, Header } from '@/components';
import MoreIcon from './more-icon';
import InstagramIcon from './instagram-icon';
import { FC, useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import storage from '@/core/storage';
import { Profile } from '@/core/types/profile';
import Thread from '@/components/thread/thread';
import ThreadBranch from '@/components/thread-branch';

type ProfilePageWidgetProps = {
  activeTab: 'threads' | 'replies' | 'reposts';
};

const ProfilePageWidget: FC<ProfilePageWidgetProps> = (props) => {
  const [profile] = useState<Profile | null>(storage.profile);

  if (!profile) {
    return null;
  }

  return (
    <div>
      <Header />
      <main
        style={{ minHeight: 'calc(100vh - 60px)' }}
        className='bg-gray-50 py-4'
      >
        <Container>
          <div className='p-6'>
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
                  <img
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

            <div className='flex justify-center pt-4 gap-[10px]'>
              <button className='bg-black text-white text-[15px] grow px-4 border rounded-[10px] border-black p-[5px]'>
                Follow
              </button>
              <button className='bg-white text-black text-[15px] grow px-4 border rounded-[10px] p-[5px]'>
                Mention
              </button>
            </div>
          </div>

          <div className='flex justify-between pb-4 text-sm'>
            <Link
              to='/profile'
              className={cn(
                'grow text-center border-b pb-3 hover:cursor-pointer',
                {
                  'text-gray-400': props.activeTab !== 'threads',
                  'text-black border-black font-medium':
                    props.activeTab === 'threads',
                }
              )}
            >
              Threads
            </Link>
            <Link
              to='/profile/replies'
              className={cn(
                'grow text-center border-b pb-3 hover:cursor-pointer',
                {
                  'text-gray-400': props.activeTab !== 'replies',
                  'text-black border-black font-medium':
                    props.activeTab === 'replies',
                }
              )}
            >
              Replies
            </Link>

            <Link
              to='/profile/reposts'
              className={cn(
                'grow text-center border-b pb-3 hover:cursor-pointer',
                {
                  'text-gray-400': props.activeTab !== 'reposts',
                  'text-black border-black font-medium':
                    props.activeTab === 'reposts',
                }
              )}
            >
              Reposts
            </Link>
          </div>

          <div data-id='content'>
            <div className='flex flex-col items-center bg-white text-black rounded-xl'>
              {props.activeTab === 'threads' &&
                storage.threads.map((thread) => (
                  <div key={thread.id} className='py-3 px-6 border-b'>
                    <Thread data={thread} />
                  </div>
                ))}

              {props.activeTab === 'replies' && (
                <>
                  <div className='py-3 px-6 border-b'>
                    <ThreadBranch
                      thread={storage.threads[0]}
                      replies={[storage.threads[1], storage.threads[2]]}
                    />
                  </div>
                  <div className='py-3 px-6 border-b'>
                    <ThreadBranch
                      thread={storage.threads[0]}
                      replies={[storage.threads[1], storage.threads[2]]}
                    />
                  </div>
                </>
              )}

              {props.activeTab === 'reposts' && <div>kek</div>}
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default ProfilePageWidget;
