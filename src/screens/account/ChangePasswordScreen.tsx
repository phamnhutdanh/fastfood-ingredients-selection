import {StyleSheet, View} from 'react-native';
import {GenericText} from '../../components/texts/generics/GenericText';

const avatarUri =
  'https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg';

export default function ChangePasswordScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <GenericText>ChangePasswordScreen</GenericText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
