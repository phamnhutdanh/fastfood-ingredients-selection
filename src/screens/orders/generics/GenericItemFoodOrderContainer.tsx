import {Pressable, StyleSheet, View} from 'react-native';
import ItemImageFood from '../../../components/items/ItemImageFood';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import {ItemSubtitleText} from '../../../components/texts/ItemSubtitleText';
import colors from '../../../styles/colors';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import {useCallback} from 'react';
import {ItemOrderInfoType, ItemOrderSizeType} from '../../../types/ItemType';
import GenericItemSizePriceQuantityOrder from './GenericItemSizePriceQuantityOrder';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import {OnPressItem} from '../../../types/GenericType';

type ThisProps = ItemOrderInfoType & {
  enabledAddButton: boolean;
  onPressItem: OnPressItem;
};

export default function GenericItemFoodOrderContainer(
  props: ThisProps,
): JSX.Element {
  const memoizedValueListSize = useCallback(
    ({item}: {item: ItemOrderSizeType}) => (
      <GenericItemSizePriceQuantityOrder
        enabledAddButton={props.enabledAddButton}
        quantity={item.quantity}
        foodSize={item.size}
        price={item.price}
      />
    ),
    [props.listSizeData],
  );

  return (
    <Pressable
      style={styles.container}
      onPress={props.onPressItem}
      android_ripple={pressableRippleConfig}>
      <View style={styles.info_container}>
        <ItemImageFood
          imageUri={props.imageUri}
          imageWidth={90}
          imageHeight={90}
          ratingScore={props.ratingScore}
        />
        <View style={styles.main_info}>
          <ItemTitleText>{props.foodName}</ItemTitleText>
          <ItemSubtitleText>{props.vendorName}</ItemSubtitleText>
        </View>
      </View>

      <GenericFlatList
        data={props.listSizeData}
        renderItem={memoizedValueListSize}
        style={styles.size}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.third,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 20,
  },
  info_container: {flexDirection: 'row', gap: 20},
  main_info: {flexDirection: 'column', gap: 4},
  size: {
    gap: 12,
  },
});
