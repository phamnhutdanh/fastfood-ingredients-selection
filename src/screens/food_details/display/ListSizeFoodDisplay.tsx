import {StyleSheet} from 'react-native';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import {ItemFoodSizeName} from '../../../types/ItemType';
import {GenericText} from '../../../components/texts/generics/GenericText';
import colors from '../../../styles/colors';

type ThisProps = {
  data: ArrayLike<ItemFoodSizeName>;
};

export default function ListSizeFoodDisplay(props: ThisProps): JSX.Element {
  const memorizedValue = ({item}: {item: any}) => (
    <GenericText style={styles.mainInfoContainer}>{item.size}</GenericText>
  );

  return (
    <GenericFlatList
      data={props.data}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      renderItem={memorizedValue}
    />
  );
}

const styles = StyleSheet.create({
  mainInfoContainer: {
    backgroundColor: colors.lightGrey,
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 20,
  },
  contentContainer: {gap: 12},
});
