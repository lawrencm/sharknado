import { config } from 'process';
import { gql } from '@apollo/client';

export default () => ({
  'rte-test': {
    enabled: true,
    resolve: './src/plugins/rte-test',
  },
  navigation: {
    enabled: true,
    config: {
      //     contentTypes: ['api::page.page'],
      //     additionalFields: [
      //       'audience',
      //       { name: 'position', type: 'string', label: 'My custom field' },
      //       {
      //         name: 'logo',
      //         type: {
      //           name: 'string',
      //           url: 'string',
      //           mime: 'string',
      //           width: 10,
      //           height: 20,
      //           previewUrl: 'string',
      //         },
      //       },
      //     ],

      //     contentTypesNameFields: {
      //       'api::page.page': ['title'],
      //     },
      //     pathDefaultFields: {
      //       'api::page.page': ['slug'],
      //     },
      //     cascadeMenuAttached: true,
      //     allowedLevels: 2,

      gql: {
        navigationItemRelated: ['Pages'],
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      // set this to true if you want to enable the playground in production
      playgroundAlways: false,
    },
  },

  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::page.page',
          draft: {
            url: 'http://localhost:3000/api/draft',
            query: {
              type: 'page',
              slug: '{slug}',
            },
          },
          published: {
            url: 'http://localhost:3000/{slug}',
          },
        },
      ],
    },
  },

  'apollo-sandbox': {
    // enables the plugin only in development mode
    // if you also want to use it in production, set this to true
    // keep in mind that graphql playground has to be enabled
    enabled: process.env.NODE_ENV === 'production' ? false : true,
    config: {
      //   endpoint: 'http://localhost:1337/graphql', // OPTIONAL - endpoint has to be accessible from the browser
    },
  },
});
