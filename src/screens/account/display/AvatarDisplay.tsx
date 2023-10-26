import {StyleSheet, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import {TitleText} from '../../../components/texts/TitleText';

type ThisProps = {
  avatarUri: string;
  name: string;
};

export default function AvatarDisplay(props: ThisProps): JSX.Element {
  return (
    <View style={styles.avatar}>
      <Avatar source={{uri: props.avatarUri}} size={120} rounded />
      <TitleText>{props.name}</TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});
