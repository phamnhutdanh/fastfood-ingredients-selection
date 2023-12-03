import {StyleSheet, View} from 'react-native';
import {useCallback, useState} from 'react';
import ItemCart from './ItemCart';
import {ItemCartType} from '../../../types/ItemType';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import {Button} from '@rneui/themed';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import {PriceText} from '../../../components/texts/PriceText';
import fonts from '../../../styles/fonts';
import {OnPressItem} from '../../../types/GenericType';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
};

export default function CartListFood(props: ThisProps): JSX.Element {
  const [price, setPrice] = useState(20000);

  const navigateToFoodDetailsScreen = (item: ItemCartType) => {
    props.navigation.navigate('FoodDetailsScreen', {
      foodName: item.foodName,
    });
  };

  const onPressPlaceOrder = () => {};

  const memorizedValue = useCallback(
    ({item}: {item: ItemCartType}) => (
      <ItemCart
        onPressItem={() => navigateToFoodDetailsScreen(item)}
        foodName={item.foodName}
        size={item.size}
        priceValue={item.priceValue}
        amount={item.amount}
        id={item.id}
      />
    ),
    [props.data],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={memorizedValue}
      contentContainerStyle={styles.container}
      ListFooterComponent={
        <CartFooter price={price} onPressPlaceOrder={onPressPlaceOrder} />
      }
    />
  );
}

type FooterType = {
  price: number;
  onPressPlaceOrder: OnPressItem;
};

function CartFooter(props: FooterType): JSX.Element {
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
  container: {
    gap: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
