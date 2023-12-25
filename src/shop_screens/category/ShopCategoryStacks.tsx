import colors from '../../styles/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopCategoryScreen from './ShopCategoryScreen';
import AddProductShopScreen from './AddProductShopScreen';
import AddSubCategoryScreen from './AddSubCategoryScreen';

type AccountStackParams = {
  ShopCategoryScreen: undefined;
  AddProductShopScreen: undefined;
  AddSubCategoryScreen: undefined;
};

const AccountNavigators = createNativeStackNavigator<AccountStackParams>();

export default function ShopCategoryStacks(): JSX.Element {
  return (
    <AccountNavigators.Navigator
      initialRouteName="ShopCategoryScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <AccountNavigators.Screen
        name="ShopCategoryScreen"
        component={ShopCategoryScreen}
        options={{headerTransparent: true, headerShown: true, headerTitle: ''}}
      />
      <AccountNavigators.Screen
        name="AddProductShopScreen"
        component={AddProductShopScreen}
        options={{headerShown: true, title: 'Add product'}}
      />
      <AccountNavigators.Screen
        name="AddSubCategoryScreen"
        component={AddSubCategoryScreen}
        options={{headerShown: true, title: 'Add subcategory'}}
      />
    </AccountNavigators.Navigator>
  );
}
