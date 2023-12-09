import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {ItemSectionText} from '../../../../components/texts/ItemSectionText';
import ItemPhoneDisplay from './ItemPhoneDisplay';
import ItemAddressDisplay from './ItemAddressDisplay';
import colors from '../../../../styles/colors';

type ThisProps = {
  phone: string;
  address: string;
};

export default function BasicInfoDisplay(props: ThisProps): JSX.Element {
  if (props.phone === null || props.address === null)
    return <ActivityIndicator size={'small'} />;
  return (
    <View style={styles.container}>
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
