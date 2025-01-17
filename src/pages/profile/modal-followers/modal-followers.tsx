import { FC, useState } from 'react';
import { Profile } from '@/core/types/profile';
import storage from '@/core/storage';

const Subscribers: FC = () => {
  const [buttonText, setButtonText] = useState('Подписаться в ответ');
  const subscribers = storage.subscribers;
  return (
    <div className='overflow-hidden overflow-y-scroll'>
      {subscribers.map((s) => {
        return (
          <div className='h-[74px] flex items-start pt-4 pl-4'>
            <div className='pt-1 pb-0.5 pr-3'>
              <img
                className='rounded-full'
                src={s.avatar}
                height={36}
                width={36}
                alt='like'
              ></img>
            </div>
            <div className='flex h-[54px] text-[15px] border-b'>
              <div className='w-[225px] items-start'>
                <div className='font-semibold'>{s.username}</div>
                <div className='text-gray-400 font-light'>{s.name}</div>
              </div>
              <button
                onClick={() => setButtonText('Подписки')}
                className='w-[188px] h-[34px] border rounded-[10px] px-4 font-semibold text-[14px]'
              >
                {buttonText}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Subscriptions: FC = () => {
  const subscription = storage.subscriptions;
  return (
    <div className='overflow-hidden overflow-y-scroll'>
      {subscription.map((s) => {
        return (
          <div className='h-[74px] flex items-start pt-4 pl-4'>
            <div className='pt-1 pb-0.5 pr-3'>
              <img
                className='rounded-full'
                src={s.avatar}
                height={36}
                width={36}
                alt='like'
              ></img>
            </div>
            <div className='flex h-[54px] text-[15px] border-b'>
              <div className='w-[225px] items-start'>
                <div className='font-semibold'>{s.username}</div>
                <div className='text-gray-400 font-light'>{s.name}</div>
              </div>
              <button className='w-[188px] h-[34px] border rounded-[10px] px-4 font-semibold text-[14px]'>
                Отписаться
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

type Props = {
  onClose: () => void;
};

const Modal: FC<Props> = (props) => {
  const [profile] = useState<Profile | null>(storage.profile);
  const [activeTab, setActiveTab] = useState<'Subscribers' | 'Subscriptions'>(
    'Subscribers'
  );

  if (!profile) {
    return null;
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center overflow-y-scroll'>
      <div
        onClick={props.onClose}
        className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40'
      />
      <div
        className='relative rounded-2xl border bg-white flex flex-col max-h-[749px] '
        style={{
          width: '520px',
          height: '749px',
        }}
      >
        <div className='flex w-full h-[60px] items-center justify-center text-center cursor-pointer'>
          <button
            onClick={() => setActiveTab('Subscribers')}
            className='w-1/2 h-[60px] text-gray-400 font-semibold border-b focus:text-black focus:border-black'
          >
            Подписчики
            <div className='text-xs font-light'>
              {storage.subscribers.length}
            </div>
          </button>
          <button
            onClick={() => setActiveTab('Subscriptions')}
            className='w-1/2 h-[60px] text-gray-400 font-semibold border-b focus:text-black focus:border-black'
          >
            Подписки
            <div className='text-xs font-light'>
              {storage.subscriptions.length}
            </div>
          </button>
        </div>
        {activeTab === 'Subscribers' && <Subscribers />}
        {activeTab === 'Subscriptions' && <Subscriptions />}
      </div>
    </div>
  );
};

export default Modal;
