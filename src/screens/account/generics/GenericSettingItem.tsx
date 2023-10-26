import {Pressable} from 'react-native';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import {OnPressItem} from '../../../types/GenericType';
import {ItemSectionText} from '../../../components/texts/ItemSectionText';

type ThisProps = {
  settingName: string;
  onPressItem: OnPressItem;
};

export default function GenericSettingItem(props: ThisProps): JSX.Element {
  return (
    <Pressable
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}>
      <ItemSectionText>{props.settingName}</ItemSectionText>
    </Pressable>
  );
}
