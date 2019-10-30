import { createSwitchNavigator } from 'react-navigation';
import MainFlow from './MainFlow';
import AuthFlow from './AuthFlow';
import ResolveAuthScreen from './../screens/auth/ResolveAuthScreen';

const RootNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  AuthFlow,
  MainFlow
});

export default RootNavigator;
