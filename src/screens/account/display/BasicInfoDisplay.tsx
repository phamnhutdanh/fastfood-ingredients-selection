import {StyleSheet, View} from 'react-native';
import {ItemSectionText} from '../../../components/texts/ItemSectionText';
import ItemGenderDisplay from './ItemGenderDisplay';
import ItemBirthdayDisplay from './ItemBirthdayDisplay';
import ItemPhoneDisplay from './ItemPhoneDisplay';
import ItemAddressDisplay from './ItemAddressDisplay';
import colors from '../../../styles/colors';

type ThisProps = {
  gender: string;
  birthday: string;
  phone: string;
  address: string;
};

export default function BasicInfoDisplay(props: ThisProps): JSX.Element {
  return (
    <View style={styles.container}>
      <ItemSectionText>Basic info</ItemSectionText>
      <ItemGenderDisplay gender={props.gender} />
      <ItemBirthdayDisplay birthday={props.birthday} />
      <ItemSectionText>Contact</ItemSectionText>
      <ItemPhoneDisplay phone={props.phone} />
      <ItemSectionText>Address</ItemSectionText>
      <ItemAddressDisplay address={props.address} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: colors.white,
  },
});
