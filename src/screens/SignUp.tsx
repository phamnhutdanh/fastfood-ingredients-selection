import {Button, Input} from '@rneui/themed';
import {View} from 'react-native';
import {BigTitleText} from '../components/texts/BigTitleText';

import {GenericText} from '../components/texts/GenericText';
import {TextLink} from '../components/texts/TextLink';
import {StyleSheet} from 'react-native';
import {useState} from 'react';

export default function SignUp({navigation, route}: any): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  /** @TODO sign up with email, password */
  const onPressButtonSignUp = () => {
    console.log('name: ' + name);
    console.log('email: ' + email);
    console.log('password: ' + password);
    console.log('re enter password: ' + reEnterPassword);
  };

  const onPressLogInLink = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <BigTitleText>Sign up</BigTitleText>
      <Input
        label="Name"
        placeholder="Enter your name..."
        value={name}
        onChangeText={setName}></Input>
      <Input
        label="Email"
        placeholder="Enter your email..."
        value={email}
        onChangeText={setEmail}></Input>
      <Input
        label="Password"
        placeholder="Enter your password..."
        secureTextEntry
        value={password}
        onChangeText={setPassword}></Input>
      <Input
        label="Re-enter password"
        placeholder="Re-enter password..."
        secureTextEntry
        value={reEnterPassword}
        onChangeText={setReEnterPassword}></Input>

      <Button
        containerStyle={styles.button_containerStyle}
        buttonStyle={styles.button_buttonStyle}
        titleStyle={styles.button_titleStyle}
        onPress={onPressButtonSignUp}>
        SIGN UP
      </Button>

      <View style={styles.textContainer}>
        <GenericText>Already have an account, </GenericText>
        <TextLink onPressItem={onPressLogInLink}>log in</TextLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  button_containerStyle: {
    width: '100%',
  },
  button_buttonStyle: {height: 60},
  button_titleStyle: {fontSize: 16, fontWeight: 'bold'},
});
