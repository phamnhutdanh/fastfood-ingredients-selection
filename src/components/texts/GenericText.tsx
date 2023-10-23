import {Text, TextProps} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

type ThisProps = TextProps;

export function GenericText(props: ThisProps): JSX.Element {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.darkBlack,
  },
});
