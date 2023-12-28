import React from 'react';
import {Icon} from '@rneui/themed';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import AdminNotificationScreen from './notification/AdminNotificationScreen';
import ReportScreen from './report_list/ReportScreen';
import AccountListStacks from './accounts/AccountListStacks';

type MainTabStackParams = {
  AccountListStacks: undefined;
  AdminNotificationScreen: undefined;
  ReportScreen: undefined;
};

const MainTabStackNavigator = createBottomTabNavigator<MainTabStackParams>();

export function MainAdminStack(): JSX.Element {
  return (
    <MainTabStackNavigator.Navigator
      initialRouteName="AccountListStacks"
      sceneContainerStyle={{backgroundColor: colors.white}}
      screenOptions={MainTabScreenOptions}>
      <MainTabStackNavigator.Screen
        name="AccountListStacks"
        component={AccountListStacks}
      />
      <MainTabStackNavigator.Screen
        name="ReportScreen"
        component={ReportScreen}
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
    } else if (route.name === 'AccountListStacks') {
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
    } else if (route.name === 'ReportScreen') {
      icon = focused
        ? (icon = (
            <Icon
              type="font-awesome"
              name="file-text"
              size={size}
              color={color}
            />
          ))
        : (icon = (
            <Icon
              type="font-awesome"
              name="file-text-o"
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
