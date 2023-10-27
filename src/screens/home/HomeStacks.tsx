import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FoodDetailsScreen from '../food_details/FoodDetailsScreen';
import VendorDetailsScreen from '../vendor_details/VendorDetailsScreen';
import HomeScreen from './HomeScreen';
import SearchScreen from '../search/SearchScreen';
import colors from '../../styles/colors';
import AccountScreen from '../account/AccountScreen';
import FavoriteScreen from '../account/FavoriteScreen';
import EditAccountScreen from '../account/EditAccountScreen';
import ChangePasswordScreen from '../account/ChangePasswordScreen';

type HomeStackParams = {
  HomeScreen: undefined;
  FoodDetailsScreen: undefined;
  VendorDetailsScreen: undefined;
  AccountScreen: undefined;
  FavoriteScreen: undefined;
  EditAccountScreen: undefined;
  ChangePasswordScreen: undefined;
  SearchScreen: undefined;
};

const HomeNavigators = createNativeStackNavigator<HomeStackParams>();

export default function HomeStacks(): JSX.Element {
  return (
    <HomeNavigators.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <HomeNavigators.Screen name="HomeScreen" component={HomeScreen} />
      <HomeNavigators.Screen
        name="FoodDetailsScreen"
        component={FoodDetailsScreen}
        options={{headerTransparent: true, headerShown: true, headerTitle: ''}}
      />
      <HomeNavigators.Screen
        name="VendorDetailsScreen"
        component={VendorDetailsScreen}
      />
      <HomeNavigators.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          contentStyle: {
            backgroundColor: colors.lightGrey,
          },
          headerTransparent: true,
          headerShown: true,
          headerTitle: '',
        }}
      />
      <HomeNavigators.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          headerShown: true,
          headerTitle: 'My favorites',
        }}
      />
      <HomeNavigators.Screen
        name="EditAccountScreen"
        component={EditAccountScreen}
        options={{
          contentStyle: {
            backgroundColor: colors.lightGrey,
          },
          headerShown: true,
          headerTitle: 'Edit account',
        }}
      />
      <HomeNavigators.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{
          contentStyle: {
            backgroundColor: colors.lightGrey,
          },
          headerShown: true,
          headerTitle: 'Change password',
        }}
      />
      <HomeNavigators.Screen name="SearchScreen" component={SearchScreen} />
    </HomeNavigators.Navigator>
  );
}
