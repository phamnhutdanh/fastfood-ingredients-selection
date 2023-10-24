import {StyleSheet, View} from 'react-native';
import ItemImageFood from './ItemImageFood';
import {ItemTitleText} from '../texts/ItemTitleText';
import {ItemSubtitleText} from '../texts/ItemSubtitleText';
import {GenericText} from '../texts/generics/GenericText';
import colors from '../../styles/colors';
import {PriceText} from '../texts/PriceText';
import {Button} from '@rneui/themed';

type ThisProps = {};

export default function ItemFoodSquare(props: ThisProps): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: colors.third,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 12,
      }}>
      <View style={{flexDirection: 'row', gap: 12}}>
        <ItemImageFood imageWidth={120} imageHeight={120} />
        <View style={{flexDirection: 'column', gap: 4}}>
          <ItemTitleText>Name</ItemTitleText>
          <ItemSubtitleText>Vendor</ItemSubtitleText>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 4,
              backgroundColor: colors.white,
              borderRadius: 12,
            }}>
            <GenericText style={{color: colors.darkBlack, fontSize: 12}}>
              Type
            </GenericText>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
        <View style={{flex: 1}}>
          <PriceText textSize={16} priceValue={30000} />
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 4,
            backgroundColor: colors.white,
            borderRadius: 12,
            height: '100%',
          }}>
          <GenericText
            style={{
              color: colors.darkBlack,
              fontSize: 12,
            }}>
            S
          </GenericText>
        </View>

        <Button buttonStyle={{padding: 0}}>-</Button>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 4,
            backgroundColor: colors.white,
            borderRadius: 12,
          }}>
          <GenericText style={{color: colors.darkBlack, fontSize: 12}}>
            1
          </GenericText>
        </View>
        <Button buttonStyle={{padding: 0}}>+</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  info_container: {},
  image_item: {},
  add_button: {},
  price_and_button: {},
});
