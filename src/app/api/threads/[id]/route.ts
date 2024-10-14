import { storage } from '@/core';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const thread = storage.threads.find((thread) => thread.id === params.id);

  return Response.json(thread);
}
