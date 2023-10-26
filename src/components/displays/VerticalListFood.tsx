import {StyleSheet} from 'react-native';
import {useCallback} from 'react';

import {FoodListItemType} from '../../types/ItemType';
import GenericFlatList from './generics/GenericFlatList';
import ItemFoodVertical from '../items/ItemFoodVertical';
import {ComponentStyle, ItemComponent} from '../../types/GenericType';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
  listHeaderComponent?: ItemComponent | any;
  contentContainerStyle?: ComponentStyle;
};

export default function VerticalListFood(props: ThisProps): JSX.Element {
  const navigateToFoodDetailsScreen = (item: FoodListItemType) => {
    props.navigation.navigate('FoodDetailsScreen', {
      id: item.id,
      foodName: item.foodName,
    });
  };

  const memorizedValue = useCallback(
    ({item}: {item: FoodListItemType}) => (
      <ItemFoodVertical
        imageUri={''}
        foodName={item.foodName}
        vendorName={item.vendorName}
        priceValue={item.priceValue}
        onPressItem={() => navigateToFoodDetailsScreen(item)}
        onPressAddButton={() => navigateToFoodDetailsScreen(item)}
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
      contentContainerStyle={[styles.container, props.contentContainerStyle]}
      ListHeaderComponent={props.listHeaderComponent}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});
