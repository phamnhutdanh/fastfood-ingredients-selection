import GenericTextNavigationDisplay from '../../../../components/texts/generics/GenericTextNavigationDisplay';

type ThisProps = {
  navigation: any;
};

export default function ItemLogoutDisplay(props: ThisProps): JSX.Element {
  const navigateToLoginScreen = () => {
    props.navigation.navigate('LoginScreen');
  };
  return (
    <GenericTextNavigationDisplay
      settingName={'Log out'}
      onPressItem={navigateToLoginScreen}
    />
  );
}
