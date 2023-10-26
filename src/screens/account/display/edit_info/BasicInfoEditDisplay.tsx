import {StyleSheet, View} from 'react-native';
import {ItemSectionText} from '../../../../components/texts/ItemSectionText';
import colors from '../../../../styles/colors';
import EditNameDisplay from './EditNameDisplay';
import EditGenderDisplay from './EditGenderDisplay';
import EditBirthdayDisplay from './EditBirthdayDisplay';
import EditPhoneDisplay from './EditPhoneDisplay';
import EditAddressDisplay from './EditAddressDisplay';

type ThisProps = {
  name: string;
  onChangedName: (text: string) => void;
  gender: string;
  onChangedGender: (text: string) => void;
  birthday: string;
  onChangedBirthday: (text: string) => void;
  phone: string;
  onChangedPhone: (text: string) => void;
  address: string;
  onChangedAddress: (text: string) => void;
};

export default function BasicInfoEditDisplay(props: ThisProps): JSX.Element {
  return (
    <View style={styles.container}>
      <ItemSectionText>Basic info</ItemSectionText>
      <EditNameDisplay value={props.name} onChangedText={props.onChangedName} />
      <EditGenderDisplay
        value={props.gender}
        onChangedText={props.onChangedGender}
      />
      <EditBirthdayDisplay
        value={props.birthday}
        onChangedText={props.onChangedBirthday}
      />
      <ItemSectionText>Contact</ItemSectionText>
      <EditPhoneDisplay
        value={props.phone}
        onChangedText={props.onChangedPhone}
      />
      <ItemSectionText>Address</ItemSectionText>
      <EditAddressDisplay
        value={props.address}
        onChangedText={props.onChangedAddress}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: colors.white,
    gap: 12,
  },
});
