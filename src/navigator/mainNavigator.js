import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile209318Navigator from '../features/UserProfile209318/navigator';
import Maps209299Navigator from '../features/Maps209299/navigator';
import Settings209277Navigator from '../features/Settings209277/navigator';
import Settings209262Navigator from '../features/Settings209262/navigator';
import NotificationList209261Navigator from '../features/NotificationList209261/navigator';
import Maps209260Navigator from '../features/Maps209260/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile209318: { screen: UserProfile209318Navigator },
Maps209299: { screen: Maps209299Navigator },
Settings209277: { screen: Settings209277Navigator },
Settings209262: { screen: Settings209262Navigator },
NotificationList209261: { screen: NotificationList209261Navigator },
Maps209260: { screen: Maps209260Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
