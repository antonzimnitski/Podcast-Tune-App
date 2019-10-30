import React, { StatelessComponent, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import gql from 'graphql-tag';
import { NavigationStackProp } from 'react-navigation-stack';
import { useQuery } from '@apollo/react-hooks';

interface Props {
  navigation: NavigationStackProp;
}

const ResolveAuthScreen: StatelessComponent<Props> = ({ navigation }) => {
  const { data } = useQuery(userQuery);

  useEffect(() => {
    data &&
      (data.me ? navigation.navigate('Home') : navigation.navigate('Auth'));
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
