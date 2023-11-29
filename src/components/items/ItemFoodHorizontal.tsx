import {Pressable, StyleSheet, View} from 'react-native';
import {ItemTitleText} from '../../components/texts/ItemTitleText';
import {ItemSubtitleText} from '../../components/texts/ItemSubtitleText';
import colors from '../../styles/colors';
import ItemImageFood from './ItemImageFood';
import {OnPressItem} from '../../types/GenericType';
import {pressableRippleConfig} from '../../styles/pressable_config';
import {PriceText} from '../texts/PriceText';
import {FoodListItemType} from '../../types/ItemType';
import display from '../../utils/display';
import {Icon} from '@rneui/themed';
import RatingText from '../texts/RatingText';

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
        imageWidth={display.setWidth(45)}
        imageHeight={display.setWidth(45) / 1.5}
      />
      <View style={styles.info_container}>
        <View style={styles.name_and_rating}>
          <ItemTitleText style={styles.text}>{props.foodName}</ItemTitleText>
          <RatingText ratingScore={4.5} />
        </View>

        <ItemSubtitleText style={styles.text}>
          {props.vendorName}
        </ItemSubtitleText>
        <View style={styles.price_and_button}>
          <PriceText textSize={12} priceValue={props.priceValue} />
          <View style={styles.buttonAddToCart}>
            <Icon
              type="material-community"
              name="cart-outline"
              size={20}
              color={colors.white}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    paddingBottom: 12,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    flex: 1,
  },
  name_and_rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginBottom: -8,
  },
  info_container: {
    width: '100%',
    paddingHorizontal: 4,
  },
  image_item: {
    width: 160,
    height: 120,
    borderRadius: 20,
  },
  price_and_button: {
    flexDirection: 'row',
    marginTop: 8,
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
  buttonAddToCart: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 12,
  },
});
