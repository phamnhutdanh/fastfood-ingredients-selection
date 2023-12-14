import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import BasicInfoDisplay from './display/basic_info/BasicInfoDisplay';
import AvatarDisplay from './display/AvatarDisplay';
import MyFavoriteDisplay from './display/MyFavoriteDisplay';
import SettingDisplay from './display/setting/SettingDisplay';
import colors from '../../styles/colors';
import {useQuery} from '@apollo/client';
import {GET_USER_BY_FIREBASE_UID} from './AccountQuery';
import {FIREBASE_AUTH} from '../../auth/firebaseConfig';
import {ItemTitleText} from '../../components/texts/ItemTitleText';
import {TextLink} from '../../components/texts/TextLink';

const list = [
  {
    id: 1,
    foodName: 'Name',
    vendorName: 'Vendor',
    priceValue: 30000,
    rating: 3.4,
  },
  {
    id: 2,
    foodName: 'Name 2',
    vendorName: 'Vendor 2',
    priceValue: 20000,
    rating: 3.1,
  },
  {
    id: 3,
    foodName: 'Name 3',
    vendorName: 'Vendor 3',
    priceValue: 10000,
    rating: 4.4,
  },
  {
    id: 4,
    foodName: 'Name 4',
    vendorName: 'Vendor 4',
    priceValue: 3000,
    rating: 2.4,
  },
];

type ThisProps = {
  navigation: any;
  route: any;
};

export default function AccountScreen(props: ThisProps): JSX.Element {
  const {data, loading} = useQuery(GET_USER_BY_FIREBASE_UID, {
    variables: {
      id: FIREBASE_AUTH.currentUser?.uid,
    },
  });

  const navigateToCreateShopAccount = () => {
    props.navigation.navigate('');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <AvatarDisplay
          avatarUri={data?.getUserByFirebaseUID?.imageUrl}
          name={data?.getUserByFirebaseUID?.name}
          email={data?.getUserByFirebaseUID?.account.email}
        />
      )}

      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <BasicInfoDisplay
          phone={data?.getUserByFirebaseUID?.phoneNumber}
          address={data?.getUserByFirebaseUID?.defaultAddress}
        />
      )}
      <View>
        <TextLink onPress={navigateToCreateShopAccount}>Create a shop</TextLink>
      </View>
      <MyFavoriteDisplay data={list} navigation={props.navigation} />
      <SettingDisplay navigation={props.navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 40,
    gap: 12,
    backgroundColor: colors.lightGrey,
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {},
});
