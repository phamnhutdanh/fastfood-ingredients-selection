import {Pressable, StyleSheet, View} from 'react-native';
import {ItemTitleText} from '../../texts/ItemTitleText';
import {ItemSubtitleText} from '../../texts/ItemSubtitleText';
import colors from '../../../styles/colors';
import ItemImageFood from '../ItemImageFood';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import {PriceText} from '../../texts/PriceText';

import {OnPressItem} from '../../../types/GenericType';
import {FoodListItemType} from '../../../types/ItemType';
import fonts from '../../../styles/fonts';
import display from '../../../utils/display';
import RatingText from '../../texts/RatingText';
import {Icon} from '@rneui/themed';
import FavoriteButton from '../../buttons/FavoriteButton';

type ThisProps = FoodListItemType & {
  isFavorite: boolean;
  onPressFavoriteButton?: OnPressItem;
};

export default function GenericItemFoodVertical(props: ThisProps): JSX.Element {
  return (
    <Pressable
      style={styles.container}
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}>
      <ItemImageFood
        imageUri={props.imageUri ? props.imageUri : ''}
        imageWidth={display.setWidth(30)}
        imageHeight={display.setHeight(15)}
      />
      <View style={styles.info_container}>
        <View style={styles.name_and_rating}>
          <ItemTitleText style={styles.text}>{props.foodName}</ItemTitleText>
          <RatingText ratingScore={4.5} />
        </View>
        <ItemSubtitleText style={{marginBottom: 4}}>
          {props.vendorName}
        </ItemSubtitleText>
        <ItemSubtitleText numberOfLines={2} style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ItemSubtitleText>
        <View style={styles.price_and_button}>
          <PriceText priceValue={props.priceValue} textSize={14} />
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

      {props.isFavorite ? (
        <FavoriteButton
          isFavorite={true}
          onPressItem={() => props.onPressFavoriteButton}
        />
      ) : (
        <View></View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingEnd: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  buttonAddToCart: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  description: {
    fontFamily: fonts.POPPINS_EXTRA_LIGHT,
  },
  info_container: {
    flex: 1,
  },
  name_and_rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginBottom: -8,
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
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
