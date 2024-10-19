import { Search, Header, Container } from '@/components';

export default function SearchPage() {
  return (
    <div>
      <Header />
      <main className='py-4 bg-gray-50'>
        <Container>
          <Search />
        </Container>
      </main>
    </div>
  );
}
