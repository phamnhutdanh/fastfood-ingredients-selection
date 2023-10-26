import {Pressable, StyleSheet, View} from 'react-native';
import {ItemTitleText} from '../../texts/ItemTitleText';
import {ItemSubtitleText} from '../../texts/ItemSubtitleText';
import colors from '../../../styles/colors';
import ItemImageFood from '../ItemImageFood';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import {PriceText} from '../../texts/PriceText';

import {ItemComponent} from '../../../types/GenericType';
import {FoodListItemType} from '../../../types/ItemType';

type ThisProps = FoodListItemType & {
  buttonRight: ItemComponent | any;
};

export default function GenericItemFoodVertical(props: ThisProps): JSX.Element {
  return (
    <Pressable
      style={styles.container}
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}>
      <ItemImageFood
        imageUri={props.imageUri ? props.imageUri : ''}
        imageWidth={120}
        imageHeight={120}
        ratingScore={props.rating}
      />
      <View style={styles.info_container}>
        <ItemTitleText>{props.foodName}</ItemTitleText>
        <ItemSubtitleText>{props.vendorName}</ItemSubtitleText>
        <PriceText priceValue={props.priceValue} />
      </View>

      {props.buttonRight}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.third,
    paddingEnd: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  info_container: {
    flex: 1,
  },
  image_item: {
    width: 160,
    height: 120,
    borderRadius: 20,
  },
  add_button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
  },
  price_and_button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
