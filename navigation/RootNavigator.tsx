import { createSwitchNavigator } from 'react-navigation';
import MainFlow from './MainFlow';
import LoginFlow from './LoginFlow';
import ResolveAuthScreen from './../screens/auth/ResolveAuthScreen';

const RootNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  LoginFlow,
  MainFlow
});

export default RootNavigator;
