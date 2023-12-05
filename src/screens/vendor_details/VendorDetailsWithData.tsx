import {Button} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import VendorInfoDisplay from './display/VendorInfoDisplay';
import ListSubcategoryFoods from './display/ListSubcategyFoods';

type ThisProps = {
  shopId: string;
  navigation: any;
};

type FoodSectionType = {
  title: string;
  listFood: ArrayLike<any>;
};

export default function VendorDetailsWithData(props: ThisProps): JSX.Element {
  const navigateToAllFoodOfShop = () => {
    props.navigation.navigate('VendorFoodDetails');
  };

  return (
    <View style={styles.container}>
      <VendorInfoDisplay id={props.shopId} />
      <ListSubcategoryFoods id={props.shopId} navigation={props.navigation} />

      <Button buttonStyle={styles.button} onPress={navigateToAllFoodOfShop}>
        VIEW ALL FOODS
      </Button>
    </View>
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
