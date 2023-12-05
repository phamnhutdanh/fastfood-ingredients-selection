import VendorDetailsWithData from './VendorDetailsWithData';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function VendorDetailsScreen(props: ThisProps): JSX.Element {
  return (
    <VendorDetailsWithData
      shopId={props.route.params.shopId}
      navigation={props.navigation}
    />
  );
}
