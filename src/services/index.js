import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://hydrogenquocdemo.myshopify.com/api/2021-01/graphql.json',
  cache: new InMemoryCache(),
  headers: {
    'X-Shopify-Storefront-Access-Token': '4c8f6829a0ea7d1eb152e284490ec969',
  },
});