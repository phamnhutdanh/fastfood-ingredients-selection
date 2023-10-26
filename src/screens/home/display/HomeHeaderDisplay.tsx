import {Pressable, StyleSheet, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import {BigTitleText} from '../../../components/texts/BigTitleText';
import {pressableRippleConfig} from '../../../styles/pressable_config';

type ThisProps = {
  navigation: any;
  avatarUri: string;
};

export default function HomeHeaderDisplay(props: ThisProps): JSX.Element {
  const navigateToAccountScreen = () => {
    props.navigation.navigate('AccountScreen');
  };

  return (
    <View style={styles.titleContainer}>
      <BigTitleText>Welcome!!!</BigTitleText>
      <Pressable
        android_ripple={pressableRippleConfig}
        onPress={navigateToAccountScreen}>
        <Avatar source={{uri: props.avatarUri}} size={48} rounded />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
