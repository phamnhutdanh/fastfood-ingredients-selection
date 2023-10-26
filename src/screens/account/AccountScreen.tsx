import {Avatar, Text} from '@rneui/themed';
import {View} from 'react-native';
import {TitleText} from '../../components/texts/TitleText';

const avatarUri =
  'https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg';

export default function AccountScreen(): JSX.Element {
  return (
    <View>
      <View>
        <Avatar source={{uri: avatarUri}} size={90} rounded />
        <TitleText>Smurf Cat</TitleText>
      </View>

      <View></View>
    </View>
  );
}
