import React from 'react';
import {Icon} from '@rneui/themed';
import colors from '../styles/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyOrderHistory from './orders/MyOrderScreen';
import Notification from './notification/Notification';
import HomeStacks from './home/HomeStacks';
import CartStacks from './cart/CartStacks';

type MainTabStackParams = {
  HomeStacks: undefined;
  CartStacks: undefined;
  OrderHistory: undefined;
  Notification: undefined;
};

const MainTabStackNavigator = createBottomTabNavigator<MainTabStackParams>();

export function MainStack(): JSX.Element {
  return (
    <MainTabStackNavigator.Navigator
      initialRouteName="HomeStacks"
      sceneContainerStyle={{backgroundColor: colors.white}}
      screenOptions={MainTabScreenOptions}>
      <MainTabStackNavigator.Screen
        name="HomeStacks"
        options={{title: 'Home'}}
        component={HomeStacks}
      />
      <MainTabStackNavigator.Screen
        name="CartStacks"
        options={{title: 'Cart'}}
        component={CartStacks}
      />
      <MainTabStackNavigator.Screen
        name="OrderHistory"
        options={{title: 'OrderHistory'}}
        component={MyOrderHistory}
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
    if (route.name === 'HomeStacks') {
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
    } else if (route.name === 'CartStacks') {
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
    } else if (route.name === 'OrderHistory') {
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
