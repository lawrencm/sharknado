import {
  PagesBySlugDocument,
  PagesBySlugQuery,
  PagesBySlugQueryVariables,
  PublicationState,
} from '@sharknado/cms-api';
import { DynamicPageContent } from '../../ComponentFactory/DynamicPageContent';
import styles from './page.module.css';
import { getClient } from '../../CMSClient/client';
import { DocumentNode } from 'graphql';
import { draftMode } from 'next/headers';

export default async function Page({ params }: { params: { slug: string } }) {
  const WierdBugSlug = params.slug;
  const draftModeEnabled = draftMode().isEnabled;

  const { data, error, errors } = await getClient().query<
    PagesBySlugQuery,
    PagesBySlugQueryVariables
  >({
    query: PagesBySlugDocument as DocumentNode,
    variables: {
      slug: WierdBugSlug.toString(),
      publicationState: draftModeEnabled
        ? PublicationState.Preview
        : PublicationState.Live,
    },
  });

  console.log(params.slug);

  //get the first page in the results
  const firstPage = data.pages?.data[0];

  return (
    <div className={styles['container']}>
      {JSON.stringify(data, null, 2)}
      <h1>
        Welcome to Page {params.slug}!{' '}
        {draftMode().isEnabled ? 'Draft Mode' : 'Live'}
      </h1>
      <DynamicPageContent pageId={firstPage?.id ?? '0'} />
    </div>
  );
}
