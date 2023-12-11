import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SectionText} from '../../../components/texts/SectionText';
import {ItemSubtitleText} from '../../../components/texts/ItemSubtitleText';

type ThisProps = {
  avatarUri: string;
  name: string;
  email: string;
};

export default function AvatarDisplay(props: ThisProps): JSX.Element {
  return (
    <SafeAreaView style={styles.avatar}>
      <Avatar
        source={{
          uri: props.avatarUri
            ? props.avatarUri
            : 'https://res.cloudinary.com/dxz5uumy7/image/upload/v1702088258/Food_data/default/png-transparent-default-avatar-thumbnail.png',
        }}
        size={60}
        rounded
      />

      <View style={{flex: 1}}>
        <SectionText>{props.name}</SectionText>
        <ItemSubtitleText>{props.email}</ItemSubtitleText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
  },
});
