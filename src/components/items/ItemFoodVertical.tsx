import {OnPressItem} from '../../types/GenericType';
import {FoodListItemType} from '../../types/ItemType';
import AddButton from '../buttons/AddButton';
import GenericItemFoodVertical from './generics/GenericItemFoodVertical';

type ThisProps = FoodListItemType & {
  onPressAddButton: OnPressItem;
};

export default function ItemFoodVertical(props: ThisProps): JSX.Element {
  return (
    <GenericItemFoodVertical
      imageUri={props.imageUri}
      foodName={props.foodName}
      vendorName={props.foodName}
      priceValue={props.priceValue}
      onPressItem={props.onPressItem}
      buttonRight={<AddButton onPressItem={() => props.onPressAddButton} />}
      id={props.id}
      rating={props.rating}
    />
  );
}
