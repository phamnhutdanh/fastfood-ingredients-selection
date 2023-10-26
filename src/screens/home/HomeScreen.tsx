import {StyleSheet, View} from 'react-native';
import {BigTitleText} from '../../components/texts/BigTitleText';
import {Avatar} from '@rneui/themed';
import {SearchBarButton} from '../../components/buttons/SearchBarButton';
import {SectionText} from '../../components/texts/SectionText';
import GenericFlatList from '../../components/displays/generics/GenericFlatList';
import ItemFoodVertical from '../../components/items/ItemFoodVertical';
import {FoodListItemType} from '../../types/ItemType';
import {useCallback} from 'react';
import ItemFoodHorizontal from '../../components/items/ItemFoodHorizontal';

const avatarUri =
  'https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg';

type ThisProps = {
  navigation: any;
  route: any;
};

const popularFastFoodList = [
  {
    id: 1,
    foodName: 'Name',
    vendorName: 'Vendor',
    priceValue: 30000,
    rating: 3.4,
  },
  {
    id: 2,
    foodName: 'Name 2',
    vendorName: 'Vendor 2',
    priceValue: 20000,
    rating: 3.1,
  },
  {
    id: 3,
    foodName: 'Name 3',
    vendorName: 'Vendor 3',
    priceValue: 10000,
    rating: 4.4,
  },
  {
    id: 4,
    foodName: 'Name 4',
    vendorName: 'Vendor 4',
    priceValue: 3000,
    rating: 2.4,
  },
];

export default function HomeScreen(props: ThisProps): JSX.Element {
  const navigateToFoodDetailsScreen = (item: FoodListItemType) => {
    props.navigation.navigate('FoodDetailsScreen', {
      id: item.id,
      foodName: item.foodName,
    });
  };

  const memorizedValueHorizontalList = useCallback(
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
    [popularFastFoodList],
  );

  const memorizedValueVerticalList = useCallback(
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
    [popularFastFoodList],
  );

  return (
    <GenericFlatList
      contentContainerStyle={styles.mainContainer}
      data={popularFastFoodList}
      renderItem={memorizedValueVerticalList}
      ListHeaderComponent={
        <View style={styles.headingContainer}>
          <View style={styles.titleContainer}>
            <BigTitleText>Welcome!!!</BigTitleText>
            <Avatar source={{uri: avatarUri}} size={48} rounded />
          </View>
          <SearchBarButton onPressItem={() => console.log('navigation')} />

          {/* TODO: List food by type  */}

          <SectionText>Popular fast food</SectionText>
          <GenericFlatList
            data={popularFastFoodList}
            renderItem={memorizedValueHorizontalList}
            horizontal
            contentContainerStyle={styles.horizontalContainer}
          />
          <SectionText>Shop near from you</SectionText>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    gap: 12,
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  headingContainer: {
    gap: 12,
  },
  horizontalContainer: {
    gap: 20,
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
