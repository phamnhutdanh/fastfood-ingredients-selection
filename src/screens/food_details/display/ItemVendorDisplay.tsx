import GenericTextNavigationDisplay from '../../../components/texts/generics/GenericTextNavigationDisplay';

type ThisProps = {
  navigation: any;
};

export default function ItemVendorDisplay(props: ThisProps): JSX.Element {
  const navigateToVendorDetailsScreen = () => {
    props.navigation.navigate('VendorDetailsScreen');
  };

  return (
    <GenericTextNavigationDisplay
      settingName={'Vendor'}
      onPressItem={navigateToVendorDetailsScreen}
    />
  );
}
