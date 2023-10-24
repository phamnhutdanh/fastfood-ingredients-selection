import React from 'react';
import {Icon} from '@rneui/themed';
import colors from '../styles/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home/Home';
import Cart from './cart/Cart';
import Orders from './orders/Orders';
import Notification from './notification/Notification';

type MainTabStackParams = {
  Home: undefined;
  Cart: undefined;
  Orders: undefined;
  Notification: undefined;
};

const MainTabStackNavigator = createBottomTabNavigator<MainTabStackParams>();

export function MainStack(): JSX.Element {
  return (
    <MainTabStackNavigator.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{backgroundColor: colors.white}}
      screenOptions={MainTabScreenOptions}>
      <MainTabStackNavigator.Screen
        name="Home"
        options={{title: 'Home'}}
        component={Home}
      />
      <MainTabStackNavigator.Screen
        name="Cart"
        options={{title: 'Cart'}}
        component={Cart}
      />
      <MainTabStackNavigator.Screen
        name="Orders"
        options={{title: 'Orders'}}
        component={Orders}
      />
      <MainTabStackNavigator.Screen
        name="Notification"
        options={{title: 'Notification'}}
        component={Notification}
      />
    </MainTabStackNavigator.Navigator>
  );
}
const MainTabScreenOptions = ({route}: any) => ({
  tabBarIcon: ({focused, color, size}: any) => {
    let icon;
    if (route.name === 'Home') {
      icon = focused
        ? (icon = (
            <Icon
              type="material-community"
              name="home-search"
              size={size}
              color={color}
            />
          ))
        : (icon = (
            <Icon
              type="material-community"
              name="home-search-outline"
              size={size}
              color={color}
            />
          ));
    } else if (route.name === 'Cart') {
      icon = focused
        ? (icon = (
            <Icon
              type="material-community"
              name="cart"
              size={size}
              color={color}
            />
          ))
        : (icon = (
            <Icon
              type="material-community"
              name="cart-outline"
              size={size}
              color={color}
            />
          ));
    } else if (route.name === 'Orders') {
      icon = focused
        ? (icon = (
            <Icon type="ionicon" name="newspaper" size={size} color={color} />
          ))
        : (icon = (
            <Icon
              type="ionicon"
              name="newspaper-outline"
              size={size}
              color={color}
            />
          ));
    } else if (route.name === 'Notification') {
      icon = focused
        ? (icon = (
            <Icon
              type="material-community"
              name="bell"
              size={size}
              color={color}
            />
          ))
        : (icon = (
            <Icon
              type="material-community"
              name="bell-outline"
              size={size}
              color={color}
            />
          ));
    }
    // You can return any component that you like here!
    return icon;
  },
  tabBarStyle: {
    backgroundColor: colors.white,
    borderTopWidth: 0,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.darkBlack,
  headerShown: false,
});
