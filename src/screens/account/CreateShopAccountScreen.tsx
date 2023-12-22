import {useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import SaveCancelButton from './display/SaveCancelButton';
import colors from '../../styles/colors';
import {Icon, Input} from '@rneui/themed';
import {useMutation} from '@apollo/client';
import {CreateShopInputType} from '../../types/ItemType';
import {CREATE_SHOP_ACCOUNT} from './AccountQuery';
import Snackbar from 'react-native-snackbar';
import AvatarDisplay from './display/AvatarDisplay';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Asset,
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {uploadImageToCloudinary} from '../../utils/updateImageToCloudinary';
import {ErrorMessageText} from '../../components/texts/ErrorMessageText';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function CreateShopAccountScreen(props: ThisProps): JSX.Element {
  const [shopAddress, setShopAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [shopName, setShopName] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [createShopAccount, {loading, data, error}] =
    useMutation(CREATE_SHOP_ACCOUNT);
  const [userId, setUserId] = useState(props.route.params.user.userId);
  const [imageFile, setImageFile] = useState<Asset>();

  const [isDisplayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const createShop = async () => {
    if (shopAddress === '' || phoneNumber === '' || shopName === '') {
      setErrorMessage('Fields cannot be empty!');
      setDisplayError(true);
      return;
    }
    if (imageFile) {
      try {
        const publicId = await uploadImageToCloudinary(imageFile!);
        let shop: CreateShopInputType = {
          shopAddress: shopAddress,
          shopPhoneNumber: phoneNumber,
          shopName: shopName,
          imageUri: publicId,
          userId: userId,
        };
        await createShopAccount({
          variables: {
            shop: shop,
          },
        }).then(() => {
          Snackbar.show({text: 'Shop account created success'});
          props.navigation.navigate('AccountScreen');
        });
      } catch (error) {
        console.log('EditAccountScreen: ', error);
      }
    } else {
      let shop: CreateShopInputType = {
        shopAddress: shopAddress,
        shopPhoneNumber: phoneNumber,
        shopName: shopName,
        imageUri: '',
        userId: userId,
      };
      await createShopAccount({
        variables: {
          shop: shop,
        },
      }).then(() => {
        Snackbar.show({text: 'Shop account created success'});
        props.navigation.navigate('AccountScreen');
      });
    }
  };

  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    selectionLimit: 1,
  };

  const onPressImage = () => {
    launchImageLibrary(options, async response => {
      if (response?.assets) {
        setImageFile(response.assets?.at(0));
        setImageUri(response.assets?.at(0)?.uri!);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <AvatarDisplay
        avatarUri={imageUri}
        name={shopName}
        email={props.route.params.user.email}
        isEdit
        onPressImage={onPressImage}
      />
      <Input
        placeholder="Enter your shop name..."
        value={shopName}
        onChangeText={setShopName}
        leftIcon={
          <Icon
            name="drive-file-rename-outline"
            size={20}
            color={colors.darkBlack}
            type="material"
          />
        }
        leftIconContainerStyle={{marginRight: 10}}
      />

      <Input
        placeholder="Enter your shop phone number..."
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        leftIcon={
          <Icon
            name="phone"
            size={20}
            color={colors.darkBlack}
            type="material"
          />
        }
        leftIconContainerStyle={{marginRight: 10}}
      />

      <Input
        value={shopAddress}
        onChangeText={setShopAddress}
        placeholder="Enter your shop address..."
        leftIcon={
          <Icon
            name="location-on"
            size={20}
            color={colors.darkBlack}
            type="material"
          />
        }
        leftIconContainerStyle={{marginRight: 10}}
      />

      {isDisplayError ? (
        <ErrorMessageText>{errorMessage}</ErrorMessageText>
      ) : (
        <View></View>
      )}

      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <SaveCancelButton
          navigation={props.navigation}
          onPressSave={createShop}
          title="CREATE"
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
});
