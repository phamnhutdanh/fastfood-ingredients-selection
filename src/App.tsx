import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from './styles/theme';
import LoginScreen from './screens/login/LoginScreen';
import SignUpScreen from './screens/sign_up/SignUpScreen';
import {MainStack} from './screens/MainStack';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

type RootStackParams = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  MainStack: undefined;
};
const RootStackNavigator = createNativeStackNavigator<RootStackParams>();

const client = new ApolloClient({
  uri: 'https://fast-food-app-server-3f49c46d8b64.herokuapp.com',
  cache: new InMemoryCache(),
});

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
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
              <RootStackNavigator.Screen
                name="MainStack"
                component={MainStack}
              />
            </RootStackNavigator.Navigator>
          </NavigationContainer>
        </ApolloProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
