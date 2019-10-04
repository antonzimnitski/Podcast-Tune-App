import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { createAppContainer } from 'react-navigation';
import { ENDPOINT } from './config';

import RootNavigator from './navigation/RootNavigator';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: ENDPOINT,
  credentials: 'include'
});

const Root = createAppContainer(RootNavigator);

const App = () => (
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>
);

export default App;
