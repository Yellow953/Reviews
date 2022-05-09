import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';

const screens = {
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
};

// home stack navigator screens
const RootDrawerNavigator = createDrawerNavigator(screens);

export default createAppContainer(RootDrawerNavigator);


