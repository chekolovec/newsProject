import { createDrawerNavigator } from "react-navigation-drawer";

import SideMenu from "../components/SideMenu";
import MainScreen from "../screens/Main";

export default createDrawerNavigator(
  {
    MainScreen,
  },
  {
    contentComponent: SideMenu,
  },
);
