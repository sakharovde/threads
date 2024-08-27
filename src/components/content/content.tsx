
import styles from './content.module.css';
import like from './like2.png';
import comment from './comment.png';
import repost from './repost.png';
import share from './share.png';
import dotsIcon from './dots.svg';
import Image from 'next/image';
import {Post} from '@/utils';
import { FC } from 'react';
type Props = {
    posts: Post[];
}
 const Content:FC<Props> = (props) => {
    return (
        <div className={styles.container}>
            {props.posts.map((post) => (
                <div key={post.id} className={styles.blok}>
                    <div>
                        <div className={styles.userlogo} style={{backgroundImage: `url(${post.avatar})`}}></div>
                    </div>
                    <div>
                        <div className={styles.header}>
                            <div className={styles.user}>
                                <div className={styles.username}>
                                    {post.username}
                                </div>
                                <div className={styles.date}>
                                    {post.date}d.
                                </div>
                            </div>
                            <div className={styles.burger}>
                                <Image src={dotsIcon} height={13} width={13} alt="dots"/>
                            </div>
                        </div>
                        <div className={styles.post}>
                            {post.text}
                        </div>
                        <div className={styles.content}>
                            <Image src={post.image} height={640} width={480} alt="ост"></Image>
                        </div>
                        <div className={styles.communication}>
                            <button className={styles.btn}><Image src={like} height={20} width={20} alt="like"></Image></button>
                            <button className={styles.btn}><Image src={comment} height={20} width={20} alt="comments"></Image></button>
                            <button className={styles.btn}><Image src={repost} height={20} width={20} alt="repost"></Image></button>
                            <button className={styles.btn}><Image src={share} height={20} width={20} alt="share"></Image></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Content;