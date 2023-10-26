import {StyleSheet, View} from 'react-native';
import {BigTitleText} from '../../components/texts/BigTitleText';
import {Avatar} from '@rneui/themed';
import {SearchBarButton} from '../../components/buttons/SearchBarButton';
import {MainTabFoodHome} from './tabs/MainTabFoodHome';

const avatarUri =
  'https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function HomeScreen(props: ThisProps): JSX.Element {
  return (
    <>
      <View style={styles.headContainer}>
        <BigTitleText>Welcome!!!</BigTitleText>
        <Avatar source={{uri: avatarUri}} size={48} rounded />
      </View>

      <SearchBarButton onPressItem={() => console.log('navigation')} />

      <MainTabFoodHome navigation={props.navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  headContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
