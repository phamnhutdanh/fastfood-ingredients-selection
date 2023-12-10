import {StyleSheet, View} from 'react-native';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import EditAddressDisplay from '../../account/display/edit_info/EditAddressDisplay';
import {TextLink} from '../../../components/texts/TextLink';
import {ChooseDateDisplay} from '../../../components/displays/ChooseDateDisplay';
import colors from '../../../styles/colors';
import React, {useState} from 'react';
import {DatePickerDialog} from '../../../components/dialogs/DatePickerDialog';

type ThisProps = {
  address: string;
  setAddress: (item: string) => void;
};

export function ListHeaderOrder(props: ThisProps): JSX.Element {
  const [date, setSelectedDate] = useState<Date>(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <ItemTitleText>Address</ItemTitleText>
        <TextLink onPress={() => {}}>Choose address</TextLink>
      </View>

      <EditAddressDisplay
        value={props.address}
        onChangedText={props.setAddress}
      />

      <View style={styles.text}>
        <ItemTitleText>Delivery time</ItemTitleText>
        <DatePickerDialog onSelectedDate={setSelectedDate} date={date} />
      </View>

      <ChooseDateDisplay
        iconSize={24}
        iconColor={colors.darkBlack}
        value={date}
      />

      <ItemTitleText>All food</ItemTitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  text: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
