import {StyleSheet, View} from 'react-native';
import {TextLink} from '../../components/texts/TextLink';
import {ItemTitleText} from '../../components/texts/ItemTitleText';
import EditAddressDisplay from '../account/display/edit_info/EditAddressDisplay';
import {useState} from 'react';
import {GenericText} from '../../components/texts/generics/GenericText';
import {TotalPriceAndPlaceOrder} from '../cart/display/TotalPriceAndPlaceOrderDisplay';

export default function MyOrderHistory(): JSX.Element {
  const [address, setAddress] = useState(
    'address address address address address address address',
  );

  const placeOrder = () => {
    console.log('Place order');
  };
  return (
    <View>
      <View style={styles.text}>
        <ItemTitleText>My favorite foods</ItemTitleText>
        <TextLink onPress={() => {}}>View all</TextLink>
      </View>
      <EditAddressDisplay value={address} onChangedText={setAddress} />
      <View style={styles.text}>
        <ItemTitleText>All food</ItemTitleText>
        <TextLink onPress={() => {}}>Delete all</TextLink>
      </View>

      <View>
        <ItemTitleText>Payment method</ItemTitleText>
        <GenericText>Cast on delivery</GenericText>
      </View>

      <TotalPriceAndPlaceOrder price={10000} onPressPlaceOrder={placeOrder} />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
