import GenericTextNavigationDisplay from '../../../components/texts/generics/GenericTextNavigationDisplay';
import {ComponentStyle} from '../../../types/GenericType';

type ThisProps = {
  navigation: any;
  textStyle?: ComponentStyle;
};

export default function ItemVendorDisplay(props: ThisProps): JSX.Element {
  const navigateToVendorDetailsScreen = () => {
    props.navigation.navigate('VendorDetailsScreen');
  };

  return (
    <GenericTextNavigationDisplay
      settingName={'Vendor'}
      onPressItem={navigateToVendorDetailsScreen}
      textStyle={props.textStyle}
    />
  );
}
