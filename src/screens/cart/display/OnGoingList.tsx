import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import ItemOnGoing from './ItemOnGoing';

type ThisProps = {
  data: ArrayLike<any>;
};

export default function OnGoingList(props: ThisProps): JSX.Element {
  const memorizedValue = useCallback(
    ({item}: {item: any}) => (
      <ItemOnGoing
        foodName={item.productSize.product.title}
        size={item.productSize.title}
        amount={item.count}
        id={item.id}
        status={item.status}
        imageUri={item.productSize.product.imageUri}
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
    gap: 20,
  },
});
