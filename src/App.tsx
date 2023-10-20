import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from './styles/theme';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import {MainStack} from './screens/MainStack';

type RootStackParams = {
  Login: undefined;
  SignUp: undefined;
  MainStack: undefined;
};

const RootStackNavigator = createNativeStackNavigator<RootStackParams>();

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootStackNavigator.Navigator
            initialRouteName="MainStack"
            screenOptions={{headerShown: false}}>
            <RootStackNavigator.Screen name="Login" component={Login} />
            <RootStackNavigator.Screen name="SignUp" component={SignUp} />
            <RootStackNavigator.Screen name="MainStack" component={MainStack} />
          </RootStackNavigator.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
