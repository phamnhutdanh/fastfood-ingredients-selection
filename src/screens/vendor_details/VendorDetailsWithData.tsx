import {Button} from '@rneui/themed';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SectionText} from '../../components/texts/SectionText';
import HorizontalListFood from '../../components/displays/HorizontalListFood';
import VendorInfoDisplay from './display/VendorInfoDisplay';

type ThisProps = {
  data: any;
  navigation: any;
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

export default function VendorDetailsWithData(props: ThisProps): JSX.Element {
  const navigateToAllFoodOfShop = () => {
    props.navigation.navigate('VendorFoodDetails');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <VendorInfoDisplay
        imageUri={props.data.getShopById.imageUri}
        vendorName={props.data.getShopById.shopName}
        phone={props.data.getShopById.shopPhoneNumber}
        address={props.data.getShopById.shopAddress}
        id={props.data.getShopById.id}
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
