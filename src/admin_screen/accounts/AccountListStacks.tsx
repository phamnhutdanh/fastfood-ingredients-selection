import {createNativeStackNavigator} from '@react-navigation/native-stack';
import colors from '../../styles/colors';
import AccountListScreen from './AccountListScreen';
import AccountDetailScreen from '../account_details/AccountDetailScreen';

type AccountListParams = {
  AccountListScreen: undefined;
  AccountDetailScreen: undefined;
};

const AccountListNavigators = createNativeStackNavigator<AccountListParams>();

export default function AccountListStacks(): JSX.Element {
  return (
    <AccountListNavigators.Navigator
      initialRouteName="AccountListScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <AccountListNavigators.Screen
        name="AccountListScreen"
        component={AccountListScreen}
      />
      <AccountListNavigators.Screen
        name="AccountDetailScreen"
        component={AccountDetailScreen}
        options={{
          headerShown: true,
          headerTitle: 'Account details',
        }}
      />
    </AccountListNavigators.Navigator>
  );
}
