import {StyleSheet, View} from 'react-native';
import {OnPressItem} from '../../../types/GenericType';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import {PriceText} from '../../../components/texts/PriceText';
import fonts from '../../../styles/fonts';
import {Button} from '@rneui/themed';

type ThisProps = {
  price: number;
  onPressPlaceOrder: OnPressItem;
};

export function TotalPriceAndPlaceOrder(props: ThisProps): JSX.Element {
  return (
    <View style={styles.footer}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <ItemTitleText>Total: </ItemTitleText>
        <PriceText priceValue={props.price} />
      </View>
      <Button
        onPress={props.onPressPlaceOrder}
        titleStyle={{
          fontSize: 16,
          fontFamily: fonts.POPPINS_BOLD,
          paddingVertical: 4,
          paddingHorizontal: 8,
        }}>
        PLACE ORDER
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
});
