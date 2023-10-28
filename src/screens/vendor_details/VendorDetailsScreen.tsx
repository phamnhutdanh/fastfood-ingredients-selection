import {Button} from '@rneui/themed';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SectionText} from '../../components/texts/SectionText';
import HorizontalListFood from '../../components/displays/HorizontalListFood';
import VendorInfoDisplay from './display/VendorInfoDisplay';

type ThisProps = {
  navigation: any;
  route: any;
};

const popularFastFoodList = [
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

const avatarUri =
  'https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg';

const addressText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default function VendorDetailsScreen(props: ThisProps): JSX.Element {
  const navigateToAllFoodOfShop = () => {
    props.navigation.navigate('VendorFoodDetails');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <VendorInfoDisplay
        imageUri={avatarUri}
        vendorName={'Shop name'}
        phone={'0123456789'}
        address={addressText}
      />

      {/** @TODO list with tab view based on food type */}
      <View>
        <SectionText>Popular in this shop</SectionText>
        <HorizontalListFood
          data={popularFastFoodList}
          navigation={props.navigation}
        />
      </View>
      <View>
        <SectionText>Popular in this shop</SectionText>
        <HorizontalListFood
          data={popularFastFoodList}
          navigation={props.navigation}
        />
      </View>

      <Button buttonStyle={styles.button} onPress={navigateToAllFoodOfShop}>
        VIEW ALL FOODS
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  button: {
    paddingVertical: 12,
  },
});
