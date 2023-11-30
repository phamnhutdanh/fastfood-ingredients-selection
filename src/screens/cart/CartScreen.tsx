import {Button} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {SectionText} from '../../components/texts/SectionText';
import {TextLink} from '../../components/texts/TextLink';
import CartListFood from './display/CartListFood';
import {PriceText} from '../../components/texts/PriceText';
import {MainTabCartScreen} from './tabs/MainTabCartScreen';

const listSize = [
  {
    id: 1,
    size: 'XS',
    quantity: 1,
    price: 2000,
  },
  {
    id: 2,
    size: 'S',
    quantity: 4,
    price: 10000,
  },
  {
    id: 3,
    size: 'M',
    quantity: 7,
    price: 22000,
  },
  {
    id: 4,
    size: 'L',
    quantity: 3,
    price: 30000,
  },
];

const listType = [
  {
    id: 1,
    type: 'Vegetable',
  },
  {
    id: 2,
    type: 'Rice',
  },
  {
    id: 3,
    type: 'Eggs',
  },
];

const listOrder = [
  {
    id: 1,
    listSizeData: listSize,
    imageUri: '',
    foodName: 'Food',
    vendorName: 'Vendor',
    ratingScore: '4.2',
    listFoodTypeData: listType,
  },
  {
    id: 2,
    listSizeData: listSize,
    imageUri: '',
    foodName: 'Food 2',
    vendorName: 'Vendor 2',
    ratingScore: '3.4',
    listFoodTypeData: listType,
  },
  {
    id: 3,
    listSizeData: listSize,
    imageUri: '',
    foodName: 'Food 3',
    vendorName: 'Vendor 3',
    ratingScore: '4.9',
    listFoodTypeData: listType,
  },
];

type ThisProps = {
  navigation: any;
  route: any;
};

export default function CartScreen(props: ThisProps): JSX.Element {
  return (
    <>
      <MainTabCartScreen navigation={props.navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 12,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonOrder: {paddingVertical: 12},
});
