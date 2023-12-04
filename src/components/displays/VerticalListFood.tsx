import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import GenericFlatList from './generics/GenericFlatList';
import ItemFoodVertical from '../items/ItemFoodVertical';
import {ComponentStyle, ItemComponent} from '../../types/GenericType';

type ThisProps = {
  data: any;
  navigation: any;
  listHeaderComponent?: ItemComponent | any;
  contentContainerStyle?: ComponentStyle;
};

export default function VerticalListFood(props: ThisProps): JSX.Element {
  const navigateToFoodDetailsScreen = (item: any) => {
    props.navigation.navigate('FoodDetailsScreen', {
      id: item.id,
      foodName: item.title,
    });
  };

  const memorizedValue = useCallback(
    ({item}: {item: any}) => (
      <ItemFoodVertical
        imageUri={item.imageUri}
        onPressItem={() => navigateToFoodDetailsScreen(item)}
        id={item.id}
        title={item.title}
        fullPrice={item.fullPrice}
        description={item.description}
        averageRatingScores={item.averageRatingScores}
        shopName={item.productSubcategory?.productCategory?.shop?.shopName}
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
