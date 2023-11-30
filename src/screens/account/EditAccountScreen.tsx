import {ScrollView, StyleSheet} from 'react-native';
import AvatarDisplay from './display/AvatarDisplay';
import BasicInfoEditDisplay from './display/edit_info/BasicInfoEditDisplay';
import {useState} from 'react';
import SaveCancelButton from './display/SaveCancelButton';
import colors from '../../styles/colors';

const avatarUri =
  'https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function EditAccountScreen(props: ThisProps): JSX.Element {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const onSave = () => {
    console.log('name: ', name);
    console.log('gender: ', gender);
    console.log('birthday: ', birthday);
    console.log('phone: ', phone);
    console.log('address: ', address);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <AvatarDisplay avatarUri={avatarUri} name={''} />
      <BasicInfoEditDisplay
        name={name}
        onChangedName={setName}
        gender={gender}
        onChangedGender={setGender}
        birthday={birthday}
        onChangedBirthday={setBirthday}
        phone={phone}
        onChangedPhone={setPhone}
        address={address}
        onChangedAddress={setAddress}
      />
      <SaveCancelButton navigation={props.navigation} onPressSave={onSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
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
