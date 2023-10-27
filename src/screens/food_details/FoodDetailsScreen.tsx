import {Button, Image} from '@rneui/themed';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {SectionText} from '../../components/texts/SectionText';
import {PriceText} from '../../components/texts/PriceText';
import SubtractButton from '../../components/buttons/SubtractButton';
import AddButton from '../../components/buttons/AddButton';
import {GenericText} from '../../components/texts/generics/GenericText';
import colors from '../../styles/colors';
import FavoriteButton from '../../components/buttons/FavoriteButton';
import GenericTextNavigationDisplay from '../../components/texts/generics/GenericTextNavigationDisplay';
import GenericFlatList from '../../components/displays/generics/GenericFlatList';

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

const listTypes = [
  {id: 1, type: 'Vegetables'},
  {id: 2, type: 'Milk'},
  {id: 3, type: 'Hamburger'},
];

export default function FoodDetailsScreen(props: ThisProps): JSX.Element {
  const {foodName} = props.route.params;
  return (
    <View style={{flex: 1}}>
      <Image
        source={{uri: imageUri}}
        containerStyle={{
          width: '100%',
          height: 240,
          alignItems: 'flex-end',
          paddingEnd: 12,
          paddingTop: 12,
        }}
        PlaceholderContent={<ActivityIndicator />}>
        <FavoriteButton onPressItem={() => {}} />
      </Image>

      <ScrollView
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: colors.white,
          marginTop: -20,
          flex: 1,
        }}
        contentContainerStyle={{
          gap: 12,
          paddingVertical: 32,
          paddingHorizontal: 28,
        }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}>
        <SectionText>Name</SectionText>
        <View style={{flexDirection: 'row'}}>
          <PriceText containerStyle={{flex: 1}} priceValue={30000} />
          <View style={{flexDirection: 'row', gap: 12}}>
            <SubtractButton
              buttonStyle={{backgroundColor: colors.lightGrey}}
              onPressItem={() => {}}
            />
            <GenericText>1</GenericText>
            <AddButton onPressItem={() => {}} />
          </View>
        </View>
        <GenericTextNavigationDisplay
          settingName={'Vendor'}
          onPressItem={() => {}}
        />
        <SectionText>Size</SectionText>
        <GenericFlatList
          data={listSizes}
          horizontal
          // style={{}}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 12}}
          renderItem={({item}: {item: any}) => (
            <GenericText
              style={{
                backgroundColor: colors.lightGrey,
                borderRadius: 12,
                paddingVertical: 4,
                paddingHorizontal: 20,
              }}>
              {item.size}
            </GenericText>
          )}
        />
        <SectionText>Type</SectionText>
        <GenericFlatList
          data={listTypes}
          horizontal
          // style={{}}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 12}}
          renderItem={({item}: {item: any}) => (
            <GenericText
              style={{
                backgroundColor: colors.lightGrey,
                borderRadius: 12,
                paddingVertical: 4,
                paddingHorizontal: 20,
              }}>
              {item.type}
            </GenericText>
          )}
        />
        <SectionText>Description</SectionText>
        <GenericText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </GenericText>
        <Button buttonStyle={{paddingVertical: 12}}>ADD TO CART</Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
