import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FoodDetailsScreen from '../food/food_details/FoodDetailsScreen';
import VendorDetailsScreen from '../vendor/vendor_details/VendorDetailsScreen';
import AccountScreen from '../account/AccountScreen';
import HomeScreen from './HomeScreen';
import SearchScreen from '../search/SearchScreen';

type HomeStackParams = {
  HomeScreen: undefined;
  FoodDetailsScreen: undefined;
  VendorDetailsScreen: undefined;
  AccountScreen: undefined;
  SearchScreen: undefined;
};

const HomeNavigators = createNativeStackNavigator<HomeStackParams>();

export default function HomeStacks(): JSX.Element {
  return (
    <HomeNavigators.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <HomeNavigators.Screen name="HomeScreen" component={HomeScreen} />
      <HomeNavigators.Screen
        name="FoodDetailsScreen"
        component={FoodDetailsScreen}
      />
      <HomeNavigators.Screen
        name="VendorDetailsScreen"
        component={VendorDetailsScreen}
      />
      <HomeNavigators.Screen name="AccountScreen" component={AccountScreen} />
      <HomeNavigators.Screen name="SearchScreen" component={SearchScreen} />
    </HomeNavigators.Navigator>
  );
}
