import {Icon, Input} from '@rneui/themed';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import {GenericText} from '../../components/texts/generics/GenericText';
import {TextLink} from '../../components/texts/TextLink';
import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import GenericButton from '../../components/buttons/generics/GenericButton';
import {ErrorMessageText} from '../../components/texts/ErrorMessageText';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {FIREBASE_AUTH} from '../../auth/firebaseConfig';
import colors from '../../styles/colors';
import Separator from '../../components/displays/Separator';
import IntroductionLogin from './display/IntroductionLogin';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function LoginScreen(props: ThisProps): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordShow, setPasswordShow] = useState(false);

  // const onPressButtonLogin = () => {
  //   props.navigation.navigate('MainStack');
  // };
  const onPressButtonLogin = async () => {
    if (email.length < 1 || password.length < 1) {
      setErrorMessage('Fields cannot be empty!');
      setIsLoading(false);
      return setDisplayError(true);
    }

    setIsLoading(true);
    const auth = FIREBASE_AUTH;
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          props.navigation.navigate('MainStack');
          setDisplayError(false);
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} ${errorMessage}`);
        });
    } finally {
      setIsLoading(false);
    }
  };

  const onPressSignUpLink = () => {
    props.navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />

      <IntroductionLogin />

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        leftIcon={
          <Icon
            name="user"
            size={20}
            color={colors.lightGrey2}
            type="feather"
          />
        }
        leftIconContainerStyle={{marginRight: 10}}
        selectionColor={colors.lightGrey}
      />

      <Input
        placeholder="Password"
        secureTextEntry={isPasswordShow ? false : true}
        value={password}
        onChangeText={setPassword}
        leftIcon={
          <Icon
            name="lock"
            size={20}
            color={colors.lightGrey2}
            type="feather"
          />
        }
        leftIconContainerStyle={{marginRight: 10}}
        selectionColor={colors.lightGrey}
        rightIcon={
          <Icon
            name={isPasswordShow ? 'eye' : 'eye-off'}
            size={22}
            color={colors.lightGrey2}
            style={{marginRight: 10}}
            onPress={() => setPasswordShow(!isPasswordShow)}
            type="feather"
          />
        }
      />

      {displayError && (
        <ErrorMessageText style={styles.errorMessage}>
          {errorMessage}
        </ErrorMessageText>
      )}

      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <GenericButton onPressItem={onPressButtonLogin}>LOGIN</GenericButton>
      )}

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
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  errorMessage: {
    alignSelf: 'flex-start',
  },
});
