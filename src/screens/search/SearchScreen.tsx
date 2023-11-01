import {Input} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {SectionText} from '../../components/texts/SectionText';
import ListTypeFoodDisplay from '../food_details/display/ListTypeFoodDisplay';
import VerticalListFood from '../../components/displays/VerticalListFood';

const listTypes = [
  {id: 1, type: 'Vegetables'},
  {id: 2, type: 'Milk'},
  {id: 3, type: 'Hamburger'},
];
const listResult = [
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
  {
    id: 5,
    foodName: 'Name 3',
    vendorName: 'Vendor 3',
    priceValue: 10000,
    rating: 4.4,
  },
  {
    id: 6,
    foodName: 'Name 4',
    vendorName: 'Vendor 4',
    priceValue: 3000,
    rating: 2.4,
  },
  {
    id: 7,
    foodName: 'Name 3',
    vendorName: 'Vendor 3',
    priceValue: 10000,
    rating: 4.4,
  },
  {
    id: 8,
    foodName: 'Name 4',
    vendorName: 'Vendor 4',
    priceValue: 3000,
    rating: 2.4,
  },
];

type ThisProps = {
  navigation: any;
};

export default function SearchScreen(props: ThisProps): JSX.Element {
  return (
    <VerticalListFood
      data={listResult}
      navigation={props.navigation}
      contentContainerStyle={styles.container}
      listHeaderComponent={
        <View style={styles.head}>
          <SectionText>Type</SectionText>
          <ListTypeFoodDisplay data={listTypes} />
          <SectionText>Price range</SectionText>
          <View style={styles.minMaxContainer}>
            <Input
              containerStyle={styles.input}
              label="Min"
              placeholder="Min price"></Input>
            <Input
              containerStyle={styles.input}
              label="Max"
              placeholder="Max price"></Input>
          </View>

          <SectionText>Result</SectionText>
        </View>
      }
    />
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 12,
  },
  head: {
    gap: 12,
  },
  minMaxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  input: {
    flex: 1,
  },
});
