import {StyleSheet} from 'react-native';
import {useCallback} from 'react';

import {FoodListItemType} from '../../types/ItemType';
import {OnPressItem} from '../../types/GenericType';
import GenericFlatList from './generics/GenericFlatList';
import ItemFoodVertical from '../items/ItemFoodVertical';

type ThisProps = {
  data: ArrayLike<any>;
  onPressItem: OnPressItem;
};

export default function VerticalListFood(props: ThisProps): JSX.Element {
  const memorizedValue = useCallback(
    ({item}: {item: FoodListItemType}) => (
      <ItemFoodVertical
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
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});
