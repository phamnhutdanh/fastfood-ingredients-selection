import GenericSettingItem from '../../generics/GenericSettingItem';

type ThisProps = {
  navigation: any;
};

export default function ItemChangePasswordDisplay(
  props: ThisProps,
): JSX.Element {
  const navigateToChangePasswordScreen = () => {
    props.navigation.navigate('ChangePasswordScreen');
  };
  return (
    <GenericSettingItem
      settingName={'Change password'}
      onPressItem={navigateToChangePasswordScreen}
    />
  );
}
