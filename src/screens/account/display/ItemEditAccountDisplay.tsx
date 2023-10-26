import GenericSettingItem from '../generics/GenericSettingItem';

type ThisProps = {
  navigation: any;
};

export default function ItemEditAccountDisplay(props: ThisProps): JSX.Element {
  const navigateToEditAccountScreen = () => {
    props.navigation.navigate('EditAccountScreen');
  };
  return (
    <GenericSettingItem
      settingName={'Edit info'}
      onPressItem={navigateToEditAccountScreen}
    />
  );
}
