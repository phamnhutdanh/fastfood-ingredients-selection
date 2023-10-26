import {Button} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GenericText} from '../texts/generics/GenericText';
import colors from '../../styles/colors';
import {OnPressItem} from '../../types/GenericType';

type ThisProps = {
  onPressItem: OnPressItem;
};

export function SearchBarButton(props: ThisProps): JSX.Element {
  return (
    <Button
      containerStyle={styles.container}
      buttonStyle={styles.buttonStyle}
      icon={{
        name: 'search',
        size: 12,
        color: colors.darkGrey,
        type: 'font-awesome',
      }}
      onPress={props.onPressItem}>
      <GenericText>Tap here to search...</GenericText>
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {},
  buttonStyle: {
    gap: 12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 32,
    backgroundColor: colors.lightGrey,
  },
});
