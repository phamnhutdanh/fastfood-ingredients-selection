import {StyleSheet, View} from 'react-native';
import {TagsText} from '../../../components/texts/TagsText';
import {PriceText} from '../../../components/texts/PriceText';
import SubtractButton from '../../../components/buttons/SubtractButton';
import AddButton from '../../../components/buttons/AddButton';

type ThisProps = {
  enabledAddButton: boolean;
  quantity: number;
  foodSize: string;
  price: number;
};

export default function GenericItemSizePriceQuantityOrder(
  props: ThisProps,
): JSX.Element {
  /** @TODO change quantity onPress */
  const onPressAddButton = () => {};
  const onPressSubtractButton = () => {};

  return (
    <View style={styles.container}>
      <TagsText>{props.foodSize}</TagsText>

      <PriceText
        textSize={16}
        priceValue={props.price}
        containerStyle={styles.price}
      />

      {props.enabledAddButton && (
        <SubtractButton onPressItem={onPressAddButton} />
      )}
      <TagsText>{props.quantity}</TagsText>
      {props.enabledAddButton && (
        <AddButton onPressItem={onPressSubtractButton} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', gap: 12},
  price: {flex: 1},
});