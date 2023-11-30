import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import ItemFoodHorizontal from '../items/ItemFoodHorizontal';

import {FoodListItemType} from '../../types/ItemType';
import GenericFlatList from './generics/GenericFlatList';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
};

export default function HorizontalListFood(props: ThisProps): JSX.Element {
  const navigateToFoodDetailsScreen = (item: FoodListItemType) => {
    props.navigation.navigate('FoodDetailsScreen', {
      id: item.id,
      foodName: item.foodName,
    });
  };

  const memorizedValue = useCallback(
    ({item}: {item: FoodListItemType}) => (
      <ItemFoodHorizontal
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
      horizontal
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
});
