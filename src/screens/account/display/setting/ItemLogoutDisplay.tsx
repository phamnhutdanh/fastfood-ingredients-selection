import GenericSettingItem from '../../generics/GenericSettingItem';

type ThisProps = {
  navigation: any;
};

export default function ItemLogoutDisplay(props: ThisProps): JSX.Element {
  const navigateToLoginScreen = () => {
    props.navigation.navigate('LoginScreen');
  };
  return (
    <GenericSettingItem
      settingName={'Log out'}
      onPressItem={navigateToLoginScreen}
    />
  );
}
