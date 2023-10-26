import {Icon, Input} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import colors from '../../../styles/colors';

type ThisProps = {
  label: string;
  placeHolder: string;
  value: string;
  onChangedText: (text: string) => void;
  iconName: string;
  iconType: string;
};

export default function GenericBasicInfoEditItem(
  props: ThisProps,
): JSX.Element {
  return (
    <View style={styles.container}>
      <Icon
        name={props.iconName}
        type={props.iconType}
        size={28}
        color={colors.darkBlack}
      />
      <Input
        label={props.label}
        placeholder={props.placeHolder}
        value={props.value}
        onChangeText={props.onChangedText}
        containerStyle={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  input: {
    flex: 1,
  },
});
