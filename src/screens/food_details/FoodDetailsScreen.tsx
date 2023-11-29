import {Button} from '@rneui/themed';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SectionText} from '../../components/texts/SectionText';
import {GenericText} from '../../components/texts/generics/GenericText';
import colors from '../../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';
import ImageFoodDetailsDisplay from './display/ImageFoodDetailsDisplay';
import PriceAndAmountDisplay from './display/PriceAndAmountDisplay';
import ItemVendorDisplay from './display/ItemVendorDisplay';
import ListSizeFoodDisplay from './display/ListSizeFoodDisplay';
import ListTypeFoodDisplay from './display/ListTypeFoodDisplay';
import {BigTitleText} from '../../components/texts/BigTitleText';
import RatingText from '../../components/texts/RatingText';

type ThisProps = {
  navigation: any;
  route: any;
};
const imageUri =
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const listSizes = [
  {id: 1, size: 'XS'},
  {id: 2, size: 'S'},
  {id: 3, size: 'M'},
  {id: 4, size: 'L'},
  {id: 5, size: 'XL'},
  {id: 6, size: '2XL'},
  {id: 7, size: '3XL'},
];

const listTags = [
  {id: 1, type: 'Vegetables'},
  {id: 2, type: 'Milk'},
  {id: 3, type: 'Hamburger'},
];

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default function FoodDetailsScreen(props: ThisProps): JSX.Element {
  const {foodName} = props.route.params;
  const [amount, setAmount] = useState(1);
  const [isFavorite, setFavorite] = useState<boolean>(true);

  const addToFavoriteFood = () => {
    console.log('CALL API: add to favorite 3');
    setFavorite(!isFavorite);
  };

  const addToCart = () => {
    console.log('Amount: ', amount);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageFoodDetailsDisplay
        isFavorite={isFavorite}
        imageUri={imageUri}
        onPressFavoriteButton={addToFavoriteFood}
      />

      <ScrollView
        style={styles.mainInfoContainer}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}>
        <BigTitleText>Name</BigTitleText>
        <PriceAndAmountDisplay
          price={20100}
          amount={amount}
          setAmount={setAmount}
        />
        <ItemVendorDisplay
          textStyle={{fontSize: 16}}
          navigation={props.navigation}
        />

        <View>
          <SectionText style={{fontSize: 16}}>Size</SectionText>
          <ListSizeFoodDisplay
            chosen={1}
            data={listSizes}
            setChosen={function (text: number): void {
              throw new Error('Function not implemented.');
            }}
          />
        </View>

        <View>
          <SectionText style={{fontSize: 16}}>Tag</SectionText>
          <ListTypeFoodDisplay data={listTags} />
        </View>

        <View style={styles.ratings}>
          <RatingText ratingScore={4.5} size={16} />
          <GenericText style={{fontSize: 16}}>1000 ratings</GenericText>
        </View>

        <View>
          <SectionText style={{fontSize: 16}}>Description</SectionText>
          <GenericText>{description}</GenericText>
        </View>

        <Button buttonStyle={styles.buttonAddToCart} onPress={addToCart}>
          ADD TO CART
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainInfoContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.white,
    marginTop: -20,
    flex: 1,
  },
  contentContainer: {
    gap: 12,
    paddingVertical: 32,
    paddingHorizontal: 28,
  },
  buttonAddToCart: {paddingVertical: 12},
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
