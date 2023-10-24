import {Button, Input} from '@rneui/themed';
import {View} from 'react-native';
import {BigTitleText} from '../components/texts/BigTitleText';

import {GenericText} from '../components/texts/GenericText';
import {TextLink} from '../components/texts/TextLink';
import {StyleSheet} from 'react-native';
import {useState} from 'react';

export default function Login({navigation, route}: any): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /** @TODO login with email, password */
  const onPressButtonLogin = () => {
    console.log('email: ' + email);
    console.log('password: ' + password);
  };

  const onPressSignUpLink = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <BigTitleText>Login</BigTitleText>
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

      <Button
        containerStyle={styles.button_containerStyle}
        buttonStyle={styles.button_buttonStyle}
        titleStyle={styles.button_titleStyle}
        onPress={onPressButtonLogin}>
        LOGIN
      </Button>

      <View style={styles.textContainer}>
        <GenericText>Didn't have an account, </GenericText>
        <TextLink onPressItem={onPressSignUpLink}>sign up</TextLink>
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
