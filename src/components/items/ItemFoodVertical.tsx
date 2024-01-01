import {OnPressItem} from '../../types/GenericType';
import {FoodListItemType} from '../../types/ItemType';
import GenericItemFoodVertical from './generics/GenericItemFoodVertical';

type ThisProps = FoodListItemType & {
  onPressItem: OnPressItem;
};

export default function ItemFoodVertical(props: ThisProps): JSX.Element {
  return (
    <GenericItemFoodVertical
      imageUri={props.imageUri}
      title={props.title}
      shopName={props.shopName}
      description={props.description}
      fullPrice={props.fullPrice}
      onPressItem={props.onPressItem}
      isFavorite={false}
      id={props.id}
    />
  );
}
