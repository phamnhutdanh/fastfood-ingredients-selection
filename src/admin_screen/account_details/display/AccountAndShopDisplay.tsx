import {Pressable, StyleSheet, View} from 'react-native';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import AvatarWithName from './AvatarWithName';
import colors from '../../../styles/colors';
import {pressableRippleConfig} from '../../../styles/pressable_config';

type ThisProps = {
  account: any;
  navigation: any;
};

export default function AccountAndShopDisplay(props: ThisProps): JSX.Element {
  const onPressAccount = () => {
    props.navigation.navigate('AccountDetailScreen', {
      accountId: props.account.id,
    });
  };
  return (
    <Pressable
      style={styles.container}
      android_ripple={pressableRippleConfig}
      onPress={onPressAccount}>
      <View>
        <ItemTitleText>User account</ItemTitleText>
        <UserAvatarWithNameWithData data={props.account.user} />
      </View>

      {props.account.user.shop && (
        <View>
          <ItemTitleText>Shop account</ItemTitleText>
          <ShopAvatarWithNameWithData data={props.account.user.shop} />
        </View>
      )}
    </Pressable>
  );
}

type UserAvatarWithData = {
  data: any;
};

function UserAvatarWithNameWithData(props: UserAvatarWithData): JSX.Element {
  return (
    <AvatarWithName avatarUri={props.data.imageUrl} name={props.data.name} />
  );
}

type ShopAvatarWithData = {
  data: any;
};

function ShopAvatarWithNameWithData(props: ShopAvatarWithData): JSX.Element {
  return (
    <AvatarWithName
      avatarUri={props.data.imageUri}
      name={props.data.shopName}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.lightGrey,
    borderRadius: 20,
    paddingVertical: 20,
  },
});
