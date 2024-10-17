import { Container, Content, Header } from '@/components';

export default async function Home() {
  return (
    <div>
      <Header />
      <main className='py-4 bg-gray-50'>
        <Container>
          <Content />
        </Container>
      </main>
    </div>
  );
}
