"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    navigation: {
        enabled: true,
        config: {
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
