import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';

const MainFlow = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default MainFlow;
