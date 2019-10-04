import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ENDPOINT } from './config';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: ENDPOINT,
  credentials: 'include'
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
