import {createNativeStackNavigator} from '@react-navigation/native-stack';
import colors from '../../styles/colors';
import MyOrderScreen from '../orders/MyOrderScreen';
import VendorDetailsScreen from '../vendor_details/VendorDetailsScreen';
import FoodDetailsScreen from '../food_details/FoodDetailsScreen';
import CartScreen from './CartScreen';
import AllFoodInShopGridDisplay from '../vendor_details/AllFoodInShopGridDisplay';

type CartStackParams = {
  CartScreen: undefined;
  MyOrderScreen: undefined;
  FoodDetailsScreen: undefined;
  VendorDetailsScreen: undefined;
  VendorFoodDetails: undefined;
};

const CartNavigators = createNativeStackNavigator<CartStackParams>();

export default function CartStacks(): JSX.Element {
  return (
    <CartNavigators.Navigator
      initialRouteName="CartScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <CartNavigators.Screen name="CartScreen" component={CartScreen} />
      <CartNavigators.Screen
        name="FoodDetailsScreen"
        component={FoodDetailsScreen}
        options={{
          headerTransparent: true,
          headerShown: true,
          headerTitle: '',
        }}
      />
      <CartNavigators.Screen
        name="VendorDetailsScreen"
        component={VendorDetailsScreen}
        options={{headerShown: true, title: 'Shop details'}}
      />
      <CartNavigators.Screen
        name="VendorFoodDetails"
        component={AllFoodInShopGridDisplay}
        options={{headerShown: true, title: ''}}
      />
      <CartNavigators.Screen
        name="MyOrderScreen"
        component={MyOrderScreen}
        options={{headerShown: true, title: 'Confirm your order'}}
      />
    </CartNavigators.Navigator>
  );
}
