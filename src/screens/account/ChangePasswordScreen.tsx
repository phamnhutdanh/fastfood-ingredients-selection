import {Dimensions, StyleSheet, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import colors from '../../styles/colors';
import {useState} from 'react';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ChangePasswordScreen(props: ThisProps): JSX.Element {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const buttonWidth = (windowWidth - 40) / 2 - 10;

  const goBack = () => {
    props.navigation.goBack();
  };

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

      <View style={styles.buttonContainer}>
        <Button
          titleStyle={styles.title}
          buttonStyle={[styles.button, styles.cancel, {width: buttonWidth}]}
          onPress={goBack}>
          CANCEL
        </Button>
        <Button
          buttonStyle={[styles.button, {width: buttonWidth}]}
          onPress={changePassword}>
          SAVE
        </Button>
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 12,
    borderRadius: 20,
  },
  cancel: {
    backgroundColor: colors.white,
  },
  title: {
    color: colors.darkBlack,
  },
  input: {
    backgroundColor: colors.white,
  },
});
