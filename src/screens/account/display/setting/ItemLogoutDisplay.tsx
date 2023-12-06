import Snackbar from 'react-native-snackbar';
import {FIREBASE_AUTH} from '../../../../auth/firebaseConfig';
import GenericTextNavigationDisplay from '../../../../components/texts/generics/GenericTextNavigationDisplay';

type ThisProps = {
  navigation: any;
};

export default function ItemLogoutDisplay(props: ThisProps): JSX.Element {
  const signOut = () => {
    const auth = FIREBASE_AUTH;
    auth
      .signOut()
      .then(() => {
        props.navigation.navigate('LoginScreen');
      })
      .catch(error => {
        Snackbar.show(error);
      });
  };

  return (
    <GenericTextNavigationDisplay
      settingName={'Log out'}
      onPressItem={signOut}
    />
  );
}
