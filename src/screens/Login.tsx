import {Button, Input} from '@rneui/themed';
import {View} from 'react-native';
import {BigTitleText} from '../components/texts/BigTitleText';

import {GenericText} from '../components/texts/GenericText';
import {TextLink} from '../components/texts/TextLink';
import {StyleSheet} from 'react-native';

export default function Login(): JSX.Element {
  return (
    <View style={styles.container}>
      <BigTitleText>Login</BigTitleText>
      <Input label="Email" placeholder="Enter your email..."></Input>
      <Input
        label="Password"
        placeholder="Enter your password..."
        secureTextEntry></Input>

      <Button
        containerStyle={styles.button_containerStyle}
        buttonStyle={styles.button_buttonStyle}
        titleStyle={styles.button_titleStyle}>
        LOGIN
      </Button>

      <View style={styles.textContainer}>
        <GenericText>Didn't have an account, </GenericText>
        <TextLink onPressItem={() => console.log('navigate to sign up')}>
          sign up
        </TextLink>
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
