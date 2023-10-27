import GenericItemFoodOrderContainer from '../../orders/generics/GenericItemFoodOrderContainer';
import {ItemOrderInfoType} from '../../../types/ItemType';
import {OnPressItem} from '../../../types/GenericType';

type ThisProps = ItemOrderInfoType & {
  onPressItem: OnPressItem;
};

export default function ItemCart(props: ThisProps): JSX.Element {
  return (
    <GenericItemFoodOrderContainer
      listSizeData={props.listSizeData}
      imageUri={props.imageUri}
      foodName={props.foodName}
      id={props.id}
      vendorName={props.vendorName}
      listFoodTypeData={props.listFoodTypeData}
      enabledAddButton={true}
      ratingScore={props.ratingScore}
      onPressItem={props.onPressItem}
    />
  );
}
