import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const ResolveAuthScreen = ({ navigation }) => {
  const { error, data } = useQuery(userQuery);

  useEffect(() => {
    if (error) console.log(`ResolveAuthScreen: ${error}`);
  }, [error]);

  useEffect(() => {
    data &&
      (data.me ? navigation.navigate('Home') : navigation.navigate('Register'));
  }, [data]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const userQuery = gql`
  query userQuery {
    me {
      id
      email
      name
      permissions
    }
  }
`;

export default ResolveAuthScreen;
