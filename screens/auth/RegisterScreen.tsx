import React, { StatelessComponent } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface Props {
  navigation: NavigationStackProp;
}

const RegisterScreen: StatelessComponent<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <Text>RegisterScreen</Text>
    <Button
      title="To Login"
      onPress={() => navigation.navigate('Login')}
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

export default RegisterScreen;
