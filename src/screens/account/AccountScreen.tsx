import {ScrollView, StyleSheet} from 'react-native';
import BasicInfoDisplay from './display/basic_info/BasicInfoDisplay';
import AvatarDisplay from './display/AvatarDisplay';
import MyFavoriteDisplay from './display/MyFavoriteDisplay';
import SettingDisplay from './display/setting/SettingDisplay';
import {useEffect, useState} from 'react';
import {FIREBASE_AUTH} from '../../auth/firebaseConfig';
import {onAuthStateChanged} from 'firebase/auth';

const avatarUri =
  'https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg';

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
  //const [authServiceInitialized, setAuthServiceInitialized] = useState(false);
  const [name, setName] = useState('Smurf cat');
  // useEffect(() => {
  //   const auth = FIREBASE_AUTH;
  //   onAuthStateChanged(auth, user => {
  //     setAuthServiceInitialized(true);
  //     if (user) {
  //       setName(user.uid);
  //     } else {
  //       props.navigation.navigate('LoginScreen');
  //     }
  //   });
  // });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <AvatarDisplay avatarUri={avatarUri} name={name} />
      <BasicInfoDisplay
        gender={'other'}
        birthday={'01/01/2000'}
        phone={'0123456789'}
        address={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        }
      />
      <MyFavoriteDisplay data={list} navigation={props.navigation} />
      <SettingDisplay navigation={props.navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 12,
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {},
});
