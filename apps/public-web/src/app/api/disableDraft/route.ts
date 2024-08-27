// route handler enabling draft mode
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  draftMode().disable();
  //redirect back to the requesting page
  //return json response

  return new Response('true');
}
