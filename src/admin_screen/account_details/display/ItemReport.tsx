import {Pressable, StyleSheet, View} from 'react-native';
import {SectionText} from '../../../components/texts/SectionText';
import {ItemSubtitleText} from '../../../components/texts/ItemSubtitleText';
import {OnPressItem} from '../../../types/GenericType';
import {convertDateTo_HM_DMY} from '../../../utils/dateConvert';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import colors from '../../../styles/colors';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';

type ThisProps = {
  title: string;
  message: string;
  updatedAt: Date;
  onPressItem: OnPressItem;
};

export default function ItemReport(props: ThisProps): JSX.Element {
  const dateString = convertDateTo_HM_DMY(props.updatedAt);
  return (
    <Pressable
      style={styles.container}
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}>
      <View style={styles.info}>
        <ItemTitleText>{props.title}</ItemTitleText>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ItemSubtitleText>{props.message}</ItemSubtitleText>
          <ItemSubtitleText>Latest update</ItemSubtitleText>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <ItemSubtitleText>{dateString}</ItemSubtitleText>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 4,
  },
  info: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    flex: 1,
  },
});
