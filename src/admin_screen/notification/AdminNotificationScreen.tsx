import {Text} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import ItemLogoutDisplay from '../../screens/account/display/setting/ItemLogoutDisplay';
import {View} from 'react-native';

type ThisProps = {
  navigation: any;
};

export default function AdminNotificationScreen(props: ThisProps): JSX.Element {
  return (
    <SafeAreaView>
      <View style={{width: '40%'}}>
        <ItemLogoutDisplay isButton navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
}
