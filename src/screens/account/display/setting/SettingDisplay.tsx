import {StyleSheet, View} from 'react-native';

import colors from '../../../../styles/colors';
import ItemEditAccountDisplay from './ItemEditAccountDisplay';
import ItemChangePasswordDisplay from './ItemChangePasswordDisplay';
import ItemLogoutDisplay from './ItemLogoutDisplay';

type ThisProps = {
  navigation: any;
};

export default function SettingDisplay(props: ThisProps): JSX.Element {
  return (
    <View style={styles.container}>
      <ItemEditAccountDisplay navigation={props.navigation} />
      <ItemChangePasswordDisplay navigation={props.navigation} />
      <ItemLogoutDisplay navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    gap: 12,
    backgroundColor: colors.white,
  },
});
