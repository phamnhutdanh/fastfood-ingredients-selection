import {OnPressItem} from './GenericType';

export type ItemOrderSizeType = {
  id: number;
  size: string;
  quantity: number;
  price: number;
};

export type ItemOrderInfoType = {
  listSizeData: ArrayLike<any>;
  imageUri: string;
  foodName: string;
  vendorName: string;
  listFoodTypeData: ArrayLike<any>;
};

export type ItemFoodType = {
  id: number;
  type: string;
};

export type ItemFoodForVerticalList = {
  imageUri: string;
  foodName: string;
  vendorName: string;
  priceValue: number;
  onPressItem: OnPressItem;
};

export type ItemFoodForHorizontalList = {
  imageUri: string;
  foodName: string;
  vendorName: string;
  priceValue: number;
  onPressItem: OnPressItem;
};
