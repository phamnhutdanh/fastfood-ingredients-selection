import {OnPressItem} from './GenericType';

export type ItemOrderSizeType = {
  id: number;
  size: string;
  quantity: number;
  price: number;
};

export type ItemOrderInfoType = {
  id: number;
  listSizeData: ArrayLike<ItemOrderSizeType>;
  imageUri: string;
  foodName: string;
  vendorName: string;
  ratingScore: number;
  listFoodTypeData: ArrayLike<any>;
};

export type FoodListItemType = {
  id: number;
  imageUri: string;
  foodName: string;
  vendorName: string;
  priceValue: number;
  onPressItem: OnPressItem;
  rating: number;
};
