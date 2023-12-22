import React from 'react';
import {Text} from '@rneui/themed';

import {ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useQuery} from '@apollo/client';
import {GET_USER_BY_FIREBASE_UID} from './screens/account/AccountQuery';
import {FIREBASE_AUTH} from './auth/firebaseConfig';
import {MainUserStack} from './screens/MainUserStack';
import {MainShopStack} from './shop_screens/MainShopStack';
import {useFocusEffect} from '@react-navigation/native';
import {UserRole} from './types/contants';

export function MainStack(): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_USER_BY_FIREBASE_UID, {
    variables: {
      id: FIREBASE_AUTH.currentUser?.uid,
    },
  });
  let loginAs = data?.getUserByFirebaseUID?.loginAs;

  useFocusEffect(() => {
    refetch();
  });

  if (loading) return <ActivityIndicator size={'large'} />;

  if (loginAs === UserRole.USER) {
    return <MainUserStack />;
  }
  if (loginAs === UserRole.SHOP_OWNER) {
    return <MainShopStack />;
  }
  if (loginAs === UserRole.ADMIN) {
    return (
      <SafeAreaView>
        <Text> Admin stack</Text>
      </SafeAreaView>
    );
  }

  return <ActivityIndicator size={'large'} />;
}
