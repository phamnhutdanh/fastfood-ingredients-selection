import {ActivityIndicator} from 'react-native';
import {GET_SHOP_BY_ID} from './VendorDetailsQuery';
import {useQuery} from '@apollo/client';
import VendorDetailsWithData from './VendorDetailsWithData';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function VendorDetailsScreen(props: ThisProps): JSX.Element {
  const {data, loading} = useQuery(GET_SHOP_BY_ID, {
    variables: {
      getShopById: props.route.params.shopId,
    },
  });

  if (loading) return <ActivityIndicator size={'large'} />;
  return (
    <VendorDetailsWithData
      data={data ? data : null}
      navigation={props.navigation}
    />
  );
}
