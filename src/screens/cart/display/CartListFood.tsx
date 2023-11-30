import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import ItemCart from './ItemCart';
import {ItemCartType} from '../../../types/ItemType';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
};

export default function CartListFood(props: ThisProps): JSX.Element {
  const navigateToFoodDetailsScreen = (item: ItemCartType) => {
    props.navigation.navigate('FoodDetailsScreen', {
      foodName: item.foodName,
    });
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
      />
    ),
    [props.data],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={memorizedValue}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
