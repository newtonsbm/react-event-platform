import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ovov7z16z901z468qzhe07/master',
  cache: new InMemoryCache()
});