import {TextProps} from '@rneui/themed';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {GenericText} from './GenericText';
import {pressableRippleConfig} from '../../styles/pressable_config';
import {OnClickItem} from '../../types/GenericType';

type ThisProps = TextProps & {
  onClickItem?: OnClickItem;
};

export function TextLink(props: ThisProps): JSX.Element {
  return (
    <Pressable
      android_ripple={pressableRippleConfig}
      onPress={props.onClickItem}>
      <GenericText {...props} style={[styles.text, props.style]}>
        {props.children}
      </GenericText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: colors.darkBlue,
  },
});
