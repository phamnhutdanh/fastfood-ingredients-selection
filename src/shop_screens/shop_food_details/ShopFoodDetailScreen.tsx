import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';

import {FIREBASE_AUTH} from '../../auth/firebaseConfig';
import {useFocusEffect} from '@react-navigation/native';
import ShopFoodDetailWithData from './ShopFoodDetailWithData';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ShopFoodDetailScreen(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_FOOD_BY_ID, {
    variables: {
      getProductById: props.route.params.foodId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  if (loading) return <ActivityIndicator size={'large'} />;
  return <GetUserIdInFoodDetails data={data} navigation={props.navigation} />;
}

type GetUserIdType = {
  data: any;
  navigation: any;
};

function GetUserIdInFoodDetails(props: GetUserIdType): JSX.Element {
  const {data, loading} = useQuery(GET_USER_BY_FIREBASE_UID, {
    variables: {
      id: FIREBASE_AUTH.currentUser?.uid,
    },
  });

  return (
    <ShopFoodDetailWithData
      userId={data?.getUserByFirebaseUID?.id}
      data={props.data ? props.data : null}
      navigation={props.navigation}
    />
  );
}
