import { Header } from '@/components';
import { faker } from '@faker-js/faker';
import Image from 'next/image';
import MoreIcon from './more-icon';
import InstagramIcon from './instagram-icon';

export default function Profile() {
  const userName = faker.internet.userName();

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
              <div className='text-2xl font-bold '>
                {faker.person.fullName()}
              </div>
              <div className='flex gap-1 text-sm items-center'>
                {userName}
                <div className='bg-gray-100 text-gray-400 text-[11px] rounded-3xl text-center px-2 py-1'>
                  threads.net
                </div>
              </div>
            </div>

            <div>
              <div className='rounded-[50%] truncate bg-gray-50'>
                <Image
                  src={faker.image.avatar()}
                  height={84}
                  width={84}
                  alt='avatar'
                />
              </div>
            </div>
          </div>

          <div className='pt-4 pb-[12px] text-sm font-normal'>
            {faker.lorem.words({ min: 200, max: 240 }).slice(0, 150)}
          </div>

          <div className='flex justify-between'>
            <div className='pb-3 text-gray-400 text-[15px] font-light flex'>
              {faker.number.int({ min: 0, max: 200 })} followers
              <span className='px-[6px]'>·</span>
              {userName}
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
        </div>
      </main>
    </div>
  );
}
