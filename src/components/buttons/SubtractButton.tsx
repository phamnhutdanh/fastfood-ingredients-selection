import {StyleSheet} from 'react-native';
import {OnPressItem} from '../../types/GenericType';
import AddAndSubtractGenericButton from './generics/AddAndSubtractGenericButton';
import colors from '../../styles/colors';

type ThisProps = {
  onPressItem: OnPressItem;
};

export default function SubtractButton(props: ThisProps): JSX.Element {
  return (
    <AddAndSubtractGenericButton
      onPress={props.onPressItem}
      buttonStyle={styles.buttonStyle}
      name={'minus'}
      iconSize={12}
      iconColor={colors.darkBlack}
    />
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.white,
  },
});
