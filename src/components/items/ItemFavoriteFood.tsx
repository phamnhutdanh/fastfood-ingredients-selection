import {OnPressItem} from '../../types/GenericType';
import {ItemFoodForVerticalList} from '../../types/ItemType';
import FavoriteButton from '../buttons/FavoriteButton';
import GenericItemFoodVertical from './generics/GenericItemFoodVertical';

type ThisProps = ItemFoodForVerticalList & {
  onPressFavoriteButton: OnPressItem;
};

export default function ItemFavoriteFood(props: ThisProps): JSX.Element {
  return (
    <GenericItemFoodVertical
      imageUri={props.imageUri}
      foodName={props.foodName}
      vendorName={props.foodName}
      priceValue={props.priceValue}
      onPressItem={props.onPressItem}
      buttonRight={
        <FavoriteButton onPressItem={() => props.onPressFavoriteButton} />
      }
    />
  );
}
