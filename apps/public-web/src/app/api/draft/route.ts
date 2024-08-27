// route handler enabling draft mode
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // const secret = searchParams.get('secret')
  const slug = searchParams.get('slug');

  draftMode().enable();
  redirect(`/${slug}`);
  // return new Response('Draft mode is enabled');
}
