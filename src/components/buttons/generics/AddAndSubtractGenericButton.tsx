import {Button, ButtonProps} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import {ColorType} from '../../../types/GenericType';

type ThisProps = ButtonProps & {
  name: string;
  iconSize?: number;
  iconColor?: ColorType;
};

export default function AddAndSubtractGenericButton(
  props: ThisProps,
): JSX.Element {
  return (
    <Button
      onPress={props.onPress}
      buttonStyle={[styles.buttonStyle, props.buttonStyle]}
      icon={{
        size: props.iconSize ? props.iconSize : 12,
        color: props.iconColor ? props.iconColor : colors.white,
        type: 'font-awesome-5',
        name: props.name,
      }}
    />
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});
