import React, {useEffect, useState} from 'react';
import {Icon} from '@rneui/themed';
import colors from '../styles/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Notification from './notification/Notification';
import HomeStacks from './home/HomeStacks';
import CartStacks from './cart/CartStacks';
import OrderHistoryScreen from './orders/OrderHistoryScreen';
import {ActivityIndicator, View} from 'react-native';
import {FIREBASE_AUTH} from '../auth/firebaseConfig';
import {onAuthStateChanged} from 'firebase/auth';
import AccountScreen from './account/AccountScreen';
import AccountStacks from './account/AccountStacks';

type MainTabStackParams = {
  HomeStacks: undefined;
  CartStacks: undefined;
  OrderHistoryScreen: undefined;
  Notification: undefined;
  AccountStacks: undefined;
};

const MainTabStackNavigator = createBottomTabNavigator<MainTabStackParams>();

type MainScreenProps = {
  navigation: any;
  route: any;
};

export function MainStack(props: MainScreenProps) {
  const [authServiceInitialized, setAuthServiceInitialized] = useState(false);

  // useEffect(() => {
  //   const auth = FIREBASE_AUTH;
  //   onAuthStateChanged(auth, user => {
  //     setAuthServiceInitialized(true);
  //     if (user) {
  //     } else {
  //       props.navigation.navigate('LoginScreen');
  //     }
  //   });
  // });

  // if (!authServiceInitialized) {
  //   return (
  //     <View>
  //       <ActivityIndicator size={'large'} />
  //     </View>
  //   );
  // }
  return <MainScreenAfterLogin />;
}

export function MainScreenAfterLogin(): JSX.Element {
  return (
    <MainTabStackNavigator.Navigator
      initialRouteName="HomeStacks"
      sceneContainerStyle={{backgroundColor: colors.white}}
      screenOptions={MainTabScreenOptions}>
      <MainTabStackNavigator.Screen name="HomeStacks" component={HomeStacks} />
      <MainTabStackNavigator.Screen name="CartStacks" component={CartStacks} />
      <MainTabStackNavigator.Screen
        name="Notification"
        component={Notification}
      />
      <MainTabStackNavigator.Screen
        name="AccountStacks"
        component={AccountStacks}
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
    } else if (route.name === 'AccountStacks') {
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
