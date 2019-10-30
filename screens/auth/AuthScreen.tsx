import React, { StatelessComponent } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface Props {
  navigation: NavigationStackProp;
}

const AuthScreen: StatelessComponent<Props> = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={{ width: '100%' }}>
        <Button onPress={() => navigation.navigate('Login')} title={'Login'} />
        <Button
          onPress={() => navigation.navigate('Register')}
          title={'Register'}
        />
      </View>
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

export default AuthScreen;
