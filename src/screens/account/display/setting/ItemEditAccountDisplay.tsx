import GenericTextNavigationDisplay from '../../../../components/texts/generics/GenericTextNavigationDisplay';

type ThisProps = {
  navigation: any;
};

export default function ItemEditAccountDisplay(props: ThisProps): JSX.Element {
  const navigateToEditAccountScreen = () => {
    props.navigation.navigate('EditAccountScreen');
  };
  return (
    <GenericTextNavigationDisplay
      settingName={'Edit info'}
      onPressItem={navigateToEditAccountScreen}
    />
  );
}
