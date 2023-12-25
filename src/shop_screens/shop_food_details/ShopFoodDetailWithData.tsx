import {Button} from '@rneui/themed';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SectionText} from '../../components/texts/SectionText';
import {GenericText} from '../../components/texts/generics/GenericText';
import colors from '../../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';

import {BigTitleText} from '../../components/texts/BigTitleText';
import RatingText from '../../components/texts/RatingText';

import ImageFoodDetailsDisplay from '../../screens/food_details/display/ImageFoodDetailsDisplay';
import ListSizeFoodDisplay from '../../screens/food_details/display/ListSizeFoodDisplay';
import ListTagFoodDisplay from '../../screens/food_details/display/ListTagFoodDisplay';
import {PriceText} from '../../components/texts/PriceText';
import DeleteFoodDialog from './display/DeleteFoodDialog';
import fonts from '../../styles/fonts';

type ThisProps = {
  data: any;
  navigation: any;
};

export default function ShopFoodDetailWithData(props: ThisProps): JSX.Element {
  const [chosen, setChosen] = useState('');
  const [fullPrice, setFullPrice] = useState(
    props.data.getProductById.fullPrice,
  );

  const editFood = () => {
    props.navigation.navigate('EditProductScreen', {
      productId: props.data.getProductById.id,
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageFoodDetailsDisplay
        imageUri={props.data.getProductById.imageUri}
        isVisibleFavorite={false}
      />

      <ScrollView
        style={styles.mainInfoContainer}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}>
        <BigTitleText>{props.data.getProductById.title}</BigTitleText>
        <PriceText textSize={16} priceValue={fullPrice} />

        {props.data.getProductById.ProductSize.length > 0 ? (
          <View>
            <SectionText style={{fontSize: 16}}>Size</SectionText>
            <ListSizeFoodDisplay
              chosen={chosen}
              setChosen={setChosen}
              setFullPrice={setFullPrice}
              data={props.data.getProductById.ProductSize}
            />
          </View>
        ) : (
          <View></View>
        )}

        {props.data.getProductById.ProductTag.length > 0 ? (
          <View>
            <SectionText style={{fontSize: 16}}>Tag</SectionText>
            <ListTagFoodDisplay data={props.data.getProductById.ProductTag} />
          </View>
        ) : (
          <View></View>
        )}

        <View style={styles.ratings}>
          <RatingText ratingScore={4.5} size={16} />
          <GenericText style={{fontSize: 16}}>1000 ratings</GenericText>
        </View>

        <View>
          <SectionText style={{fontSize: 16}}>Description</SectionText>
          <GenericText>{props.data.getProductById.description}</GenericText>
        </View>

        <Button
          buttonStyle={styles.buttonEdit}
          titleStyle={styles.titleEdit}
          onPress={editFood}>
          EDIT FOOD
        </Button>

        <DeleteFoodDialog
          foodId={props.data.getProductById.id}
          navigation={props.navigation}
        />
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonEdit: {paddingVertical: 12, backgroundColor: colors.lightGrey},
  titleEdit: {color: colors.darkBlack, fontFamily: fonts.POPPINS_BOLD},
  titleDelete: {color: colors.white},
  buttonDelete: {paddingVertical: 12, backgroundColor: colors.red},
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
