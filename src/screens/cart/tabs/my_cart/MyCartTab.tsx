import {StyleSheet, View} from 'react-native';
import CartListFood from '../../display/CartListFood';
import React from 'react';

const listCart = [
  {
    id: 1,
    imageUri: '',
    foodName: 'Food 1 ',
    size: 'Small',
    priceValue: 12.3,
    amount: 3,
  },
  {
    id: 2,
    imageUri: '',
    foodName: 'Food 2 ',
    size: 'Medium',
    priceValue: 1.3,
    amount: 4,
  },
  {
    id: 3,
    imageUri: '',
    foodName: 'Food 3 ',
    size: 'Large',
    priceValue: 2.3,
    amount: 7,
  },
];

type ThisProps = {
  navigation: any;
};

export default function MyCartTab(props: ThisProps): JSX.Element {
  return (
    <View style={styles.container}>
      <CartListFood data={listCart} navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
});
