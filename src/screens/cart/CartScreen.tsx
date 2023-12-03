import {StyleSheet} from 'react-native';
import {MainTabCartScreen} from './tabs/MainTabCartScreen';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function CartScreen(props: ThisProps): JSX.Element {
  return (
    <>
      <MainTabCartScreen navigation={props.navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 12,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonOrder: {paddingVertical: 12},
});
