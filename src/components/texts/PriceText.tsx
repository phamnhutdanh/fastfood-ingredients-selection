import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../styles/colors';
import {ItemTitleText} from './ItemTitleText';
import {ComponentStyle} from '../../types/GenericType';

type ThisProps = {
  priceValue: number;
  textSize?: number;
  containerStyle?: ComponentStyle;
};

export function PriceText(props: ThisProps): JSX.Element {
  return (
    <View style={[styles.price_container, props.containerStyle]}>
      <ItemTitleText
        style={[
          styles.price_value,
          {fontSize: props.textSize ? props.textSize : 16},
        ]}>
        {props.priceValue}
      </ItemTitleText>
      <ItemTitleText
        style={[
          styles.price_currency,
          {fontSize: props.textSize ? props.textSize : 16},
        ]}>
        VND
      </ItemTitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: colors.darkBlue,
  },
  price_container: {
    flexDirection: 'row',
    gap: 4,
  },
  price_value: {
    color: colors.darkGrey,
  },
  price_currency: {
    color: colors.secondary,
  },
});
