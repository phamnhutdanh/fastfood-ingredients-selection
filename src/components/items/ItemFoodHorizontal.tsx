import {Pressable, StyleSheet, View} from 'react-native';
import {ItemTitleText} from '../../components/texts/ItemTitleText';
import {ItemSubtitleText} from '../../components/texts/ItemSubtitleText';
import colors from '../../styles/colors';
import ItemImageFood from './ItemImageFood';
import {OnPressItem} from '../../types/GenericType';
import {pressableRippleConfig} from '../../styles/pressable_config';
import {PriceText} from '../texts/PriceText';
import AddButton from '../buttons/AddButton';
import {FoodListItemType} from '../../types/ItemType';

type ThisProps = FoodListItemType & {
  onPressAddButton: OnPressItem;
};

export default function ItemFoodHorizontal(props: ThisProps): JSX.Element {
  return (
    <Pressable
      style={styles.container}
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}>
      <ItemImageFood
        imageUri={props.imageUri ? props.imageUri : ''}
        imageWidth={150}
        imageHeight={150}
        ratingScore={props.rating}
      />

      <View style={styles.info_container}>
        <ItemTitleText>{props.foodName}</ItemTitleText>
        <ItemSubtitleText>{props.vendorName}</ItemSubtitleText>
        <View style={styles.price_and_button}>
          <PriceText priceValue={props.priceValue} />
          <AddButton onPressItem={props.onPressAddButton} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.third,
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  info_container: {
    width: '100%',
  },
  image_item: {
    width: 160,
    height: 120,
    borderRadius: 20,
  },
  price_and_button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price_value: {
    color: colors.darkGrey,
  },
  price_currency: {
    color: colors.secondary,
  },
});
