import React, { StatelessComponent } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface Props {
  navigation: NavigationStackProp;
}

const LoginScreen: StatelessComponent<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <Text>LoginScreen</Text>
    <Button
      title="To Register"
      onPress={() => navigation.navigate('Register')}
    ></Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LoginScreen;
