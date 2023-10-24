import {Pressable, StyleSheet, View} from 'react-native';

import {ItemTitleText} from '../../components/texts/ItemTitleText';
import {ItemSubtitleText} from '../../components/texts/ItemSubtitleText';
import colors from '../../styles/colors';
import {Button} from '@rneui/themed';
import ItemImageFood from './ItemImageFood';
import {OnPressItem} from '../../types/GenericType';
import {pressableRippleConfig} from '../../styles/pressable_config';

type ThisProps = {
  imageUri?: string;
  foodName: string;
  vendorName: string;
  priceValue: number;
  onPressItem: OnPressItem;
};

export default function ItemFoodVertical(props: ThisProps): JSX.Element {
  return (
    <Pressable
      style={styles.container}
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}>
      <ItemImageFood
        imageUri={props.imageUri ? props.imageUri : ''}
        imageWidth={120}
        imageHeight={120}
      />

      <View style={styles.info_container}>
        <ItemTitleText>{props.foodName}</ItemTitleText>
        <ItemSubtitleText>{props.vendorName}</ItemSubtitleText>

        <View style={styles.price_container}>
          <ItemTitleText style={styles.price_value}>
            {props.priceValue}
          </ItemTitleText>
          <ItemTitleText style={styles.price_currency}> VND</ItemTitleText>
        </View>
      </View>

      <Button
        buttonStyle={styles.add_button}
        icon={{
          size: 12,
          color: colors.white,
          type: 'font-awesome-5',
          name: 'plus',
        }}
      />
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
  price_container: {
    flexDirection: 'row',
  },
  price_value: {
    color: colors.darkGrey,
  },
  price_currency: {
    color: colors.secondary,
  },
});
