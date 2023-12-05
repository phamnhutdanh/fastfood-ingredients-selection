import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {SectionText} from '../../../components/texts/SectionText';
import HorizontalListFood from '../../../components/displays/HorizontalListFood';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import {useCallback} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ALL_SUBCATEGORY_OF_SHOP} from '../VendorDetailsQuery';

type ThisProps = {
  id: string;
  navigation: any;
};

export default function ListSubcategoryFoods(props: ThisProps): JSX.Element {
  const {data, loading} = useQuery(GET_ALL_SUBCATEGORY_OF_SHOP, {
    variables: {
      getAllSubCategoryOfShopId: props.id,
    },
  });

  const memorizedValue = useCallback(
    ({item}: {item: any}) => (
      <View>
        <SectionText>{item.title}</SectionText>
        <HorizontalListFood
          data={item.products}
          navigation={props.navigation}
        />
      </View>
    ),
    [data],
  );

  if (loading) return <ActivityIndicator size={'small'} />;
  return (
    <GenericFlatList
      data={data?.getAllSubCategoryOfShop}
      renderItem={memorizedValue}
      contentContainerStyle={[styles.container]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});
