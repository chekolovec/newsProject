import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainScreen from "../screens/Main";
import MainDrawer from "./MainDrawer";

const MainNavigator = createStackNavigator(
  {
    Main: MainScreen,
  },
  {
    headerMode: "none",
  },
);

export default createAppContainer(MainNavigator);
