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
      {props.avatarUri ? (
        <Avatar source={{uri: props.avatarUri}} size={60} rounded />
      ) : (
        <ActivityIndicator size={'small'} />
      )}

      {props.email && props.name ? (
        <View>
          <SectionText>{props.name}</SectionText>
          <ItemSubtitleText>{props.email}</ItemSubtitleText>
        </View>
      ) : (
        <ActivityIndicator size={'small'} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
  },
});
