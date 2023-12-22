import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FoodDetailsScreen from '../food_details/FoodDetailsScreen';
import VendorDetailsScreen from '../vendor_details/VendorDetailsScreen';
import HomeScreen from './HomeScreen';
import SearchScreen from '../search/SearchScreen';
import colors from '../../styles/colors';
import AllFoodInShopGridDisplay from '../vendor_details/AllFoodInShopGridDisplay';
import AccountScreen from '../account/AccountScreen';

type HomeStackParams = {
  HomeScreen: undefined;
  FoodDetailsScreen: undefined;
  VendorDetailsScreen: undefined;
  VendorFoodDetails: undefined;
  AccountScreen: undefined;
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
        options={{
          headerTransparent: false,
          headerShown: true,
          headerTitle: 'Shop details',
        }}
      />
      <HomeNavigators.Screen
        name="VendorFoodDetails"
        component={AllFoodInShopGridDisplay}
        options={{headerShown: true, title: ''}}
      />
      <HomeNavigators.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
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
