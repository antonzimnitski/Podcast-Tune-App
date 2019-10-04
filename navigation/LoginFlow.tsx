import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

const LoginFlow = createStackNavigator({
  Register: {
    screen: RegisterScreen
  },
  Login: {
    screen: LoginScreen
  }
});

export default LoginFlow;
