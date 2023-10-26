import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import ItemFoodHorizontal from '../items/ItemFoodHorizontal';

import {FoodListItemType} from '../../types/ItemType';
import {OnPressItem} from '../../types/GenericType';
import GenericFlatList from './generics/GenericFlatList';

type ThisProps = {
  data: ArrayLike<any>;
  onPressItem: OnPressItem;
};

export default function HorizontalListFood(props: ThisProps): JSX.Element {
  const memorizedValue = useCallback(
    ({item}: {item: FoodListItemType}) => (
      <ItemFoodHorizontal
        imageUri={''}
        foodName={item.foodName}
        vendorName={item.vendorName}
        priceValue={item.priceValue}
        onPressItem={props.onPressItem}
        onPressAddButton={props.onPressItem}
        id={item.id}
        rating={item.rating}
      />
    ),
    [props.data],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={memorizedValue}
      horizontal
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
