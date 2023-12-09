import {StyleSheet} from 'react-native';
import {useCallback, useState} from 'react';
import ItemCart from './ItemCart';
import {ItemCartType} from '../../../types/ItemType';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import {TotalPriceAndPlaceOrder} from './TotalPriceAndPlaceOrderDisplay';

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

  const onPressPlaceOrder = () => {
    props.navigation.navigate('MyOrderScreen');
  };

  const memorizedValue = useCallback(
    ({item}: {item: ItemCartType}) => (
      <ItemCart
        onPressItem={() => navigateToFoodDetailsScreen(item)}
        foodName={item.foodName}
        size={item.size}
        priceValue={item.priceValue}
        amount={item.amount}
        id={item.id}
        imageUri={item.imageUri}
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
        <TotalPriceAndPlaceOrder
          price={price}
          onPressPlaceOrder={onPressPlaceOrder}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
