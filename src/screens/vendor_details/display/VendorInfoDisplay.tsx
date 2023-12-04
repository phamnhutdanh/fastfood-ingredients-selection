import {Avatar} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {SectionText} from '../../../components/texts/SectionText';
import {GenericText} from '../../../components/texts/generics/GenericText';

type ThisProps = {
  imageUri: string;
  vendorName: string;
  phone: string;
  address: string;
  id: string;
};

export default function VendorInfoDisplay(props: ThisProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.imageAndName}>
        <Avatar
          source={{uri: props.imageUri}}
          size={90}
          avatarStyle={{borderRadius: 12}}
        />
        <View style={{flex: 1}}>
          <SectionText>{props.vendorName}</SectionText>
          <GenericText>Hotline: {props.phone}</GenericText>
        </View>
      </View>

      <View>
        <SectionText>Address</SectionText>
        <GenericText>{props.address}</GenericText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  imageAndName: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    paddingVertical: 12,
  },
});
