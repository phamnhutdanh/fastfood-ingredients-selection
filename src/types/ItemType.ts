import {OnPressItem} from './GenericType';

export type ItemOrderSizeType = {
  id: number;
  size: string;
  quantity: number;
  price: number;
};

export type ItemCartType = {
  id: number;
  onPressItem: OnPressItem;
  imageUri?: string;
  foodName: string;
  size: string;
  priceValue: number;
  amount: number;
};

export type ItemOngoingType = {
  id: number;
  imageUri?: string;
  foodName: string;
  size: string;
  amount: number;
  status: string;
};

export type ItemHistoryOrderType = {
  id: number;
  onPressItem: OnPressItem;
  imageUri?: string;
  foodName: string;
  date: string;
  priceValue: number;
};

export type FoodListItemType = {
  id: number;
  imageUri: string;
  title: string;
  fullPrice: number;
  description: string;
  averageRatingScores: number;
  shopName: any;
  productSubcategory?: any;
  onPressItem: OnPressItem;
};

export type ItemFoodTypeName = {
  id: number;
  type: string;
};

export type ItemFoodSizeName = {
  id: number;
  size: string;
};
