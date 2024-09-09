import { Content, Header } from '@/components';
import { getPosts } from '@/utils';

export default function Home() {
  const posts = getPosts();
  console.log(posts);
  return (
    <div>
      <Header />
      <main>
        <Content posts={posts} />
      </main>
    </div>
  );
}
