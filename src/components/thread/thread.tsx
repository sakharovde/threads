import { Thread as TThread } from '@/core/types/thread';
import like from './like2.png';
import comment from './comment.png';
import repost from './repost.png';
import share from './share.png';
import dotsIcon from './dots.svg';
import { FC } from 'react';

type Props = {
  data: TThread;
  lace?: boolean;
};

const Thread: FC<Props> = (props) => {
  return (
    <div data-id='Thread' className='flex gap-3'>
      <div className='flex flex-col items-center justify-between gap-4 pb-4'>
        <div
          className='w-9 pt-9 rounded-full bg-contain bg-gray-200'
          style={{ backgroundImage: `url(${props.data.avatar})` }}
        />
        {props.lace && (
          <div data-id='lace' className='bg-gray-200 w-[2px] flex-1' />
        )}
      </div>
      <div>
        <div className='flex items-start'>
          <div className='mr-auto flex'>
            <div className='font-semibold mr-2.5'>{props.data.username}</div>
            <div className='text-gray-300'>{props.data.date}d.</div>
          </div>
          <div className='text-gray-300 w-5 h-5 cursor-pointer flex items-center justify-center rounded-full duration-75 hover:bg-zinc-100'>
            <img src={dotsIcon} height={13} width={13} alt='dots' />
          </div>
        </div>
        <div className='h-auto'>{props.data.text}</div>
        <div className='w-full mt-2'>
          <img
            className='rounded-lg max-h-[500px]'
            src={props.data.image}
            style={{ borderRadius: '10px' }}
            alt='ост'
          ></img>
        </div>
        <div className='flex gap-6'>
          <button className='flex justify-center items-center w-10 h-10 mt-2 text-lg cursor-pointer rounded-full px-2.5 py-0 hover:bg-zinc-100'>
            <img src={like} height={20} width={20} alt='like'></img>
          </button>
          <button className='flex justify-center items-center w-10 h-10 mt-2 text-lg cursor-pointer rounded-full px-2.5 py-0 hover:bg-zinc-100'>
            <img src={comment} height={20} width={20} alt='comments'></img>
          </button>
          <button className='flex justify-center items-center w-10 h-10 mt-2 text-lg cursor-pointer rounded-full px-2.5 py-0 hover:bg-zinc-100'>
            <img src={repost} height={20} width={20} alt='repost'></img>
          </button>
          <button className='flex justify-center items-center w-10 h-10 mt-2 text-lg cursor-pointer rounded-full px-2.5 py-0 hover:bg-zinc-100'>
            <img src={share} height={20} width={20} alt='share'></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thread;
