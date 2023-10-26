import GenericItemFoodOrderContainer from '../generics/GenericItemFoodOrderContainer';
import {ItemOrderInfoType} from '../../../types/ItemType';

type ThisProps = ItemOrderInfoType & {};

export default function ItemOrder(props: ThisProps): JSX.Element {
  return (
    <GenericItemFoodOrderContainer
      listSizeData={props.listSizeData}
      imageUri={props.imageUri}
      foodName={props.foodName}
      vendorName={props.vendorName}
      listFoodTypeData={props.listFoodTypeData}
      enabledAddButton={false}
      ratingScore={props.ratingScore}
    />
  );
}
