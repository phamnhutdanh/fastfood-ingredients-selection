import {Icon} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import colors from '../../../styles/colors';
import {ItemSubtitleText} from '../../../components/texts/ItemSubtitleText';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';

type ThisProps = {
  label: string;
  value: string;
  iconName: string;
  iconType: string;
};

export default function GenericBasicInfoItem(props: ThisProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Icon
        name={props.iconName}
        type={props.iconType}
        size={36}
        color={colors.darkBlack}
      />
      <View style={styles.text}>
        <ItemSubtitleText>{props.label}</ItemSubtitleText>
        <ItemTitleText>{props.value}</ItemTitleText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  text: {
    flex: 1,
  },
});