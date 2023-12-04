import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_FOOD_BY_ID} from './FoodDetailsQuery';
import FoodDetailsWithData from './FoodDetailsWithData';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function FoodDetailsScreen(props: ThisProps): JSX.Element {
  const {data, loading} = useQuery(GET_FOOD_BY_ID, {
    variables: {
      getProductById: props.route.params.foodId,
    },
  });

  if (loading) return <ActivityIndicator size={'large'} />;
  return (
    <FoodDetailsWithData
      data={data ? data : null}
      navigation={props.navigation}
    />
  );
}
