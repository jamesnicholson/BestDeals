import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:8084/graphql',
 // uri: 'http://pickrr.store:4000/graphql',
  cache: new InMemoryCache()
});