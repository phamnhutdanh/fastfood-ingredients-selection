import {StyleSheet, View} from 'react-native';
import {Input} from '@rneui/themed';
import colors from '../../styles/colors';
import {useState} from 'react';
import SaveCancelButton from './display/SaveCancelButton';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ChangePasswordScreen(props: ThisProps): JSX.Element {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const changePassword = () => {
    // if check current password && newPassword == rePassword
    // set newPassword
    console.log('current: ', currentPassword);
    console.log('newPassword: ', newPassword);
    console.log('rePassword: ', rePassword);
  };

  return (
    <View style={styles.container}>
      <Input
        label="Current password"
        placeholder="Enter your current password..."
        secureTextEntry
        containerStyle={styles.input}
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />
      <Input
        label="New password"
        placeholder="Enter your new password..."
        secureTextEntry
        containerStyle={styles.input}
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <Input
        label="Re-enter password"
        placeholder="Re-enter your new password..."
        secureTextEntry
        containerStyle={styles.input}
        value={rePassword}
        onChangeText={setRePassword}
      />

      <SaveCancelButton
        navigation={props.navigation}
        onPressSave={changePassword}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  input: {
    backgroundColor: colors.white,
  },
});
