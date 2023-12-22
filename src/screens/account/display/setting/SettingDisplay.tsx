import {StyleSheet, View} from 'react-native';

import colors from '../../../../styles/colors';
import ItemEditAccountDisplay from './ItemEditAccountDisplay';
import ItemChangePasswordDisplay from './ItemChangePasswordDisplay';
import ItemLogoutDisplay from './ItemLogoutDisplay';
import ItemCreateShopDisplay from './ItemCreateShopDisplay';
import ItemChangeToShopAccountDisplay from './ItemChangeToShopAccountDisplay';
import {useState} from 'react';
import {UserRole} from '../../../../types/contants';

type ThisProps = {
  navigation: any;
  params: any;
};

export default function SettingDisplay(props: ThisProps): JSX.Element {
  const [role, setRole] = useState(props.params.role);

  return (
    <View style={styles.container}>
      {role === UserRole.USER && (
        <ItemCreateShopDisplay
          params={props.params}
          navigation={props.navigation}
        />
      )}

      {role === UserRole.SHOP_OWNER && (
        <ItemChangeToShopAccountDisplay
          params={props.params}
          navigation={props.navigation}
        />
      )}

      <ItemEditAccountDisplay
        params={props.params}
        navigation={props.navigation}
      />
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
