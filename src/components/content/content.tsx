import storage from '@/core/storage';
import { FC } from 'react';
import Thread from '../thread/thread';

const Content: FC = () => {
  return (
    <div className='flex flex-col items-center bg-white text-black rounded-xl'>
      {storage.threads.map((thread) => (
        <div key={thread.id} className='py-3 px-6 border-b'>
          <Thread data={thread} />
        </div>
      ))}
    </div>
  );
};

export default Content;
