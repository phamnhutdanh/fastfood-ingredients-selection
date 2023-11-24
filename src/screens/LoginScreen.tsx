import {Input} from '@rneui/themed';
import {ActivityIndicator, View} from 'react-native';
import {BigTitleText} from '../components/texts/BigTitleText';
import {GenericText} from '../components/texts/generics/GenericText';
import {TextLink} from '../components/texts/TextLink';
import {StyleSheet} from 'react-native';
import {useState} from 'react';
import GenericButton from '../components/buttons/generics/GenericButton';
import {ErrorMessageText} from '../components/texts/ErrorMessageText';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {FIREBASE_AUTH} from '../auth/firebaseConfig';

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

  /** @TODO login with email, password */
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

      {displayError && (
        <ErrorMessageText style={{alignSelf: 'flex-start'}}>
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
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    width: '100%',
  },
});
