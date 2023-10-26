import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from './styles/theme';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import {MainStack} from './screens/MainStack';

type RootStackParams = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
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
            <RootStackNavigator.Screen
              name="LoginScreen"
              component={LoginScreen}
            />
            <RootStackNavigator.Screen
              name="SignUpScreen"
              component={SignUpScreen}
            />
            <RootStackNavigator.Screen name="MainStack" component={MainStack} />
          </RootStackNavigator.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
