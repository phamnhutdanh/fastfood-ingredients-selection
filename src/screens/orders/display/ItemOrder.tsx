import GenericItemFoodOrderContainer from '../generics/GenericItemFoodOrderContainer';
import {ItemCartType} from '../../../types/ItemType';

type ThisProps = ItemCartType & {};

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
