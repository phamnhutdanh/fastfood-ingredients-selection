import {StyleSheet} from 'react-native';
import {useCallback, useState} from 'react';
import GenericFlatList from '../../components/displays/generics/GenericFlatList';
import ItemOrder from './display/ItemOrder';
import {ListHeaderOrder} from './display/ListHeaderOrder';
import {ListFooterOrder} from './display/ListFooterOrder';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function MyOrderHistory(props: ThisProps): JSX.Element {
  const [address, setAddress] = useState('address address');
  const [note, setNote] = useState('');
  const data = props.route.params.data;
  const totalPrice = props.route.params.totalPrice;

  const placeOrder = () => {};

  const memorizedValue = useCallback(
    ({item, index}: {item: any; index: number}) => (
      <ItemOrder
        id={item.id}
        imageUri={item.productSize.product.imageUri}
        foodName={item.productSize.product.title}
        size={item.productSize.title}
        priceValue={item.productSize.fullPrice}
        amount={item.amount}
      />
    ),
    [data],
  );

  return (
    <GenericFlatList
      data={data}
      renderItem={memorizedValue}
      contentContainerStyle={styles.container}
      removeClippedSubviews={false}
      ListHeaderComponent={
        <ListHeaderOrder address={address} setAddress={setAddress} />
      }
      ListFooterComponent={
        <ListFooterOrder
          totalPrice={totalPrice}
          onPressPlaceOrder={placeOrder}
          note={note}
          setNote={setNote}
        />
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
});
