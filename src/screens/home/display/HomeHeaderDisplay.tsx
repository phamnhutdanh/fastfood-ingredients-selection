import {Pressable, StyleSheet, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import {BigTitleText} from '../../../components/texts/BigTitleText';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import {SearchBarButton} from '../../../components/buttons/SearchBarButton';
import colors from '../../../styles/colors';

type ThisProps = {
  navigation: any;
};

const avatarUri =
  'https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg';

export default function HomeHeaderDisplay(props: ThisProps): JSX.Element {
  const navigateToAccountScreen = () => {
    props.navigation.navigate('AccountStacks');
  };

  return (
    <View>
      <View style={styles.oval}></View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <BigTitleText style={{color: colors.white}}>Welcome</BigTitleText>
          <Pressable
            android_ripple={pressableRippleConfig}
            onPress={navigateToAccountScreen}>
            <View style={styles.avatarContainer}>
              <Avatar source={{uri: avatarUri}} size={48} rounded />
            </View>
          </Pressable>
        </View>
        <SearchBarButton navigation={props.navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 32,
    paddingTop: 48,
    gap: 12,
  },
  avatarContainer: {
    backgroundColor: colors.white,
    padding: 2,
    borderRadius: 90,
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  oval: {
    alignSelf: 'center',
    width: '60%',
    position: 'absolute',
    height: '100%',
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    top: 0,
    transform: [{scaleX: 2}],
  },
});
