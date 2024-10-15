import { storage } from '@/core';

export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json(storage.profile);
}
