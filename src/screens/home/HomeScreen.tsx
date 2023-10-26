import {StyleSheet, View} from 'react-native';
import {SearchBarButton} from '../../components/buttons/SearchBarButton';
import {SectionText} from '../../components/texts/SectionText';
import HomeHeaderDisplay from './display/HomeHeaderDisplay';
import HorizontalListFood from '../../components/displays/HorizontalListFood';
import VerticalListFood from '../../components/displays/VerticalListFood';

const avatarUri =
  'https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg';

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

export default function HomeScreen(props: ThisProps): JSX.Element {
  return (
    <VerticalListFood
      data={popularFastFoodList}
      navigation={props.navigation}
      contentContainerStyle={styles.mainContainer}
      listHeaderComponent={
        <View style={styles.headingContainer}>
          <HomeHeaderDisplay
            navigation={props.navigation}
            avatarUri={avatarUri}
          />
          <SearchBarButton navigation={props.navigation} />
          {/* TODO: List food by type  */}
          <SectionText>Popular fast food</SectionText>
          <HorizontalListFood
            data={popularFastFoodList}
            navigation={props.navigation}
          />
          <SectionText>Shop near from you</SectionText>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    gap: 12,
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  headingContainer: {
    gap: 12,
  },
});
