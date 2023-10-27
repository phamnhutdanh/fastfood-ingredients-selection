import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import ItemCart from './ItemCart';
import {ItemOrderInfoType} from '../../../types/ItemType';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
};

export default function CartListFood(props: ThisProps): JSX.Element {
  const navigateToFoodDetailsScreen = (item: ItemOrderInfoType) => {
    props.navigation.navigate('FoodDetailsScreen', {
      foodName: item.foodName,
    });
  };

  const memorizedValue = useCallback(
    ({item}: {item: ItemOrderInfoType}) => (
      <ItemCart
        id={item.id}
        listSizeData={item.listSizeData}
        imageUri={''}
        foodName={item.foodName}
        vendorName={item.vendorName}
        ratingScore={item.ratingScore}
        listFoodTypeData={item.listFoodTypeData}
        onPressItem={() => navigateToFoodDetailsScreen(item)}
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
    paddingVertical: 12,
  },
});
