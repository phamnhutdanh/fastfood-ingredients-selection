import {TextProps} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GenericText} from './GenericText';

type ThisProps = TextProps;

export function TitleText(props: ThisProps): JSX.Element {
  return (
    <GenericText {...props} style={[styles.text, props.style]}>
      {props.children}
    </GenericText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});