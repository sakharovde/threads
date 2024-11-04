import { FC, useState } from 'react';
import { Profile } from '@/core/types/profile';
import storage from '@/core/storage';
import foto from './foto.png';
import hashtag from './hashtag.png';
import lines from './lines.png';
import gif from './gif.png';

type Props = {
  onClose: () => void;
};

const Modal: FC<Props> = (props) => {
  const [profile] = useState<Profile | null>(storage.profile);

  if (!profile) {
    return null;
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
      <div
        className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40'
        onClick={props.onClose}
      />
      <div
        className='relative rounded-2xl border bg-white flex flex-col'
        style={{
          width: '620px',
          height: '281px',
        }}
      >
        <div className='w-full h-14 border-b flex items-center '>
          <div className='w-24 pl-6 text-[17px] cursor-pointer'>
            <button>Отмена</button>
          </div>
          <div className='mx-auto w-44 text-[16px] font-semibold'>
            Новая ветка
          </div>
        </div>

        <div className='flex flex-col items-start mt-1 pt-3 px-6 pb-4 '>
          <div className='flex'>
            <div className='flex flex-col items-center'>
              <img
                className='rounded-full'
                src={profile.avatar}
                height={46}
                width={46}
                alt='avatar'
              />
              <div className='flex-1 bg-gray-200 w-0.5 my-2'></div>
            </div>
            <div className='w-full flex flex-col content-center ml-3 text-sm'>
              <div className='font-medium text-[15px]'>{profile.name}</div>
              <div className='text-gray-400 text-[15px] font-light'>
                <input
                  className='w-full text-[15px] text-gray-500 outline-none border-none'
                  type='text'
                  name=''
                  placeholder='Что нового?'
                />
              </div>
              <div className='flex mt-1 cursor-pointer'>
                <button className='flex justify-center items-center  text-lg cursor-pointer size-9'>
                  <img src={foto} height='20' width='20' alt='like' />
                </button>
                <button className='flex justify-center items-center text-lg cursor-pointer size-9'>
                  <img src={gif} height='20' width='20' alt='comments' />
                </button>
                <button className='flex justify-center items-center  text-lg cursor-pointer size-9'>
                  <img src={hashtag} height='20' width='20' alt='repost' />
                </button>
                <button className='flex justify-center items-center text-lg cursor-pointer size-9'>
                  <img src={lines} height='20' width='20' alt='share' />
                </button>
              </div>
            </div>
          </div>
          <div className='flex items-center content-center pl-2.5 '>
            <img
              className='rounded-full '
              src={profile.avatar}
              height={16}
              width={16}
              alt='avatar'
            />
            <div className='text-[16px] text-gray-200 font-light pl-5'>
              Добавить ветку
            </div>
          </div>
        </div>
        <div className='flex items-center p-6'>
          <div className='text-[15px] text-gray-400'>
            Ваши подписчики могут отвечать и цитировать
          </div>
          <div className='border rounded-xl text-[15px] text-gray-400 ml-auto px-4 py-1 border-gray-100'>
            Опубликовать
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
