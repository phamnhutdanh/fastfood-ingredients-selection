import React from 'react';
import {Icon} from '@rneui/themed';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import AccountListScreen from './accounts/AccountListScreen';
import AdminNotificationScreen from './notification/AdminNotificationScreen';

type MainTabStackParams = {
  AccountListScreen: undefined;
  AdminNotificationScreen: undefined;
};

const MainTabStackNavigator = createBottomTabNavigator<MainTabStackParams>();

export function MainAdminStack(): JSX.Element {
  return (
    <MainTabStackNavigator.Navigator
      initialRouteName="AccountListScreen"
      sceneContainerStyle={{backgroundColor: colors.white}}
      screenOptions={MainTabScreenOptions}>
      <MainTabStackNavigator.Screen
        name="AccountListScreen"
        component={AccountListScreen}
      />
      <MainTabStackNavigator.Screen
        name="AdminNotificationScreen"
        component={AdminNotificationScreen}
      />
    </MainTabStackNavigator.Navigator>
  );
}

const MainTabScreenOptions = ({route}: any) => ({
  tabBarIcon: ({focused, color, size}: any) => {
    let icon;
    if (route.name === 'AdminNotificationScreen') {
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
    } else if (route.name === 'AccountListScreen') {
      icon = focused
        ? (icon = (
            <Icon
              type="material-community"
              name="account-circle"
              size={size}
              color={color}
            />
          ))
        : (icon = (
            <Icon
              type="material-community"
              name="account-circle-outline"
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.darkBlack,
  headerShown: false,
  tabBarShowLabel: false,
});
