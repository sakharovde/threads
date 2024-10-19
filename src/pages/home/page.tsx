import { Container, Content, Header } from '@/components';

export default function HomePage() {
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
