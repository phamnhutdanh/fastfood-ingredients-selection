import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FoodDetailsScreen from '../food_details/FoodDetailsScreen';
import VendorDetailsScreen from '../vendor_details/VendorDetailsScreen';
import HomeScreen from './HomeScreen';
import SearchScreen from '../search/SearchScreen';
import colors from '../../styles/colors';
import AccountStacks from '../account/AccountStacks';

type HomeStackParams = {
  HomeScreen: undefined;
  FoodDetailsScreen: undefined;
  VendorDetailsScreen: undefined;
  AccountStacks: undefined;
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
        options={{headerShown: true, title: 'Shop details'}}
      />
      <HomeNavigators.Screen
        name="AccountStacks"
        component={AccountStacks}
        options={{
          headerTransparent: true,
          headerShown: true,
          headerTitle: '',
        }}
      />
      <HomeNavigators.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          title: 'Searching',
        }}
      />
    </HomeNavigators.Navigator>
  );
}
