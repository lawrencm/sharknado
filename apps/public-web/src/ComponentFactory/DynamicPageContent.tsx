/**
 * This file defines the `DynamicPageContent` component, which dynamically fetches and renders page content from a CMS.
 * It uses GraphQL to query the required page data and then iterates over the components retrieved from the CMS,
 * rendering each using the `DynamicComponentRenderer`.
 */

import {
  PageDocument,
  PageQuery,
  PageQueryVariables,
} from '@sharknado/cms-api';
import { DocumentNode } from 'graphql';
import { ApolloWrapper } from '../CMSClient/ApolloWrapper';
import { getClient } from '../CMSClient/client';
import GlobalTopNav from '../components/GlobalTopNav/GlobalTopNav';
import DynamicComponentRenderer from './DynamicComponentRenderer';

interface DynamicPageContentProps {
  pageId: string;
}

const DynamicPageContent = async ({ pageId }: DynamicPageContentProps) => {
  const { data } = await getClient().query<PageQuery, PageQueryVariables>({
    query: PageDocument as DocumentNode,
    variables: { id: pageId },
  });

  const bodyComponents = data?.page?.data?.attributes?.body;

  return (
    <div>
      {bodyComponents?.map((comp, idx) => {
        if (comp?.__typename === 'ComponentContentPageHero') {
          return comp ? (
            <DynamicComponentRenderer
              key={comp.__typename ? `${comp.__typename}-${idx}` : idx}
              typeName={comp.__typename ?? ''}
              componentProps={{
                ...comp,
                navigation: (
                  <ApolloWrapper>
                    <GlobalTopNav />
                  </ApolloWrapper>
                ),
              }}
            />
          ) : null;
        }

        return comp ? (
          <DynamicComponentRenderer
            key={comp.__typename ? `${comp.__typename}-${idx}` : idx}
            typeName={comp.__typename ?? ''}
            componentProps={comp}
          />
        ) : null;
      })}
    </div>
  );
};

export { DynamicPageContent };
