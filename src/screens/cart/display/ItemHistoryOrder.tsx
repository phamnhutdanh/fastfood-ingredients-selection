import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import ItemImageFood from '../../../components/items/ItemImageFood';
import display from '../../../utils/display';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import {ItemSubtitleText} from '../../../components/texts/ItemSubtitleText';
import {PriceText} from '../../../components/texts/PriceText';
import {ItemHistoryOrderType} from '../../../types/ItemType';

type ThisProps = ItemHistoryOrderType & {};

export default function ItemHistoryOrder(props: ThisProps): JSX.Element {
  return (
    <Pressable
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}>
      <View style={styles.container}>
        <ItemImageFood
          imageUri={props.imageUri ? props.imageUri : ''}
          imageWidth={display.setWidth(20)}
          imageHeight={display.setHeight(10)}
        />
        <View style={styles.info_container}>
          <ItemTitleText style={styles.text}>{props.foodName}</ItemTitleText>

          <ItemSubtitleText>{props.date}</ItemSubtitleText>
        </View>

        <PriceText priceValue={props.priceValue} textSize={14} />
      </View>
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
  },
  info_container: {
    flex: 1,
  },
  text: {
    marginBottom: -8,
  },
});