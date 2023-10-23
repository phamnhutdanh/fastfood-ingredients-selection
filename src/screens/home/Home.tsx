import {View} from 'react-native';

import {GenericText} from '../../components/texts/GenericText';
import {ItemTitleText} from '../../components/texts/ItemTitleText';
import {ItemSubtitleText} from '../../components/texts/ItemSubtitleText';

export default function Home(): JSX.Element {
  return (
    <View>
      <GenericText>Title</GenericText>
      <ItemTitleText>Already have an account, login</ItemTitleText>
      <ItemSubtitleText>Already ha</ItemSubtitleText>
    </View>
  );
}
