import { createStackNavigator } from 'react-navigation-stack';
import AuthScreen from './../screens/auth/AuthScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

const AuthFlow = createStackNavigator(
  {
    Auth: {
      screen: AuthScreen
    },
    Register: {
      screen: RegisterScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    headerMode: 'none'
  }
);

export default AuthFlow;
