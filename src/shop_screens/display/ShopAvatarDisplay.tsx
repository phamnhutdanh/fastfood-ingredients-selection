import {StyleSheet, View} from 'react-native';
import {Avatar} from '@rneui/themed';

import {GenericText} from '../../components/texts/generics/GenericText';
import {SectionText} from '../../components/texts/SectionText';

type ThisProps = {
  avatarUri: string;
  shopName: string;
  shopPhoneNumber: string;
};

export default function ShopAvatarDisplay(props: ThisProps): JSX.Element {
  return (
    <View style={styles.imageAndName}>
      <Avatar
        source={{
          uri: props.avatarUri
            ? props.avatarUri
            : 'https://res.cloudinary.com/dxz5uumy7/image/upload/v1702088258/Food_data/default/png-transparent-default-avatar-thumbnail.png',
        }}
        size={90}
        avatarStyle={{borderRadius: 12}}
      />
      <View style={{flex: 1}}>
        <SectionText>{props.shopName}</SectionText>
        <GenericText>Hotline: {props.shopPhoneNumber}</GenericText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageAndName: {
    flexDirection: 'row',
    gap: 20,
  },
});
