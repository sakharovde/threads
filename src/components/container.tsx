import { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = (props) => (
  <div
    className='my-0 mx-auto bg-white rounded-xl border-[0.5px] border-neutral-300 w-[640px]'
    style={{ boxShadow: 'rgba(0, 0, 0, 0.04) 0px 0px 12px 0px' }}
  >
    {props.children}
  </div>
);

export default Container;
