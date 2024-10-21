import { Thread as TThread } from '@/core/types/thread';
import { FC } from 'react';
import Thread from './thread/thread';

type Props = {
  thread: TThread;
  replies: TThread[];
};

const ThreadBranch: FC<Props> = (props) => {
  return (
    <div>
      <Thread data={props.thread} lace={props.replies.length > 0} />

      {props.replies.map((reply, index) => (
        <Thread data={reply} lace={index !== props.replies.length - 1} />
      ))}
    </div>
  );
};

export default ThreadBranch;
