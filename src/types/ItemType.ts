import {OnPressItem} from './GenericType';

export type ItemOrderSizeType = {
  id: string;
  size: string;
  quantity: number;
  price: number;
};

export type ItemCartType = {
  id: string;
  onPressItem: OnPressItem;
  imageUri: string;
  foodName: string;
  size: string;
  priceValue: number;
  amount: number;
};

export type ItemOrderType = {
  id: string;
  imageUri: string;
  foodName: string;
  size: string;
  priceValue: number;
  amount: number;
};

export type ItemOngoingType = {
  id: string;
  imageUri: string;
  foodName: string;
  size: string;
  amount: number;
  status: string;
};

export type ItemHistoryOrderType = {
  id: string;
  onPressItem: OnPressItem;
  imageUri: string;
  foodName: string;
  date: string;
  priceValue: number;
};

export type FoodListItemType = {
  id: string;
  imageUri: string;
  title: string;
  fullPrice: number;
  description: string;
  averageRatingScores: number;
  shopName: any;
  onPressItem: OnPressItem;
};

export type ItemFoodTagName = {
  id: string;
  title: string;
};

export type ItemFoodSizeName = {
  id: string;
  title: string;
  fullPrice: number;
};

export type CreateShopInputType = {
  shopAddress: string;
  shopPhoneNumber: string;
  shopName: string;
  imageUri: string;
  userId: string;
};

export type UpdateShopInputType = {
  shopAddress: string;
  shopPhoneNumber: string;
  shopName: string;
  imagePublicId: string;
  shopId: string;
};

export type OrderProductInputType = {
  fullPrice: number;
  count: number;
  deliveryAddress: string;
  totalCost: number;
  commentary: string;
  deliveredAt: string;
  userId: string;
  productSizeId: string;
};

export type CreateProductInputType = {
  subcategoryId: string;
  imagePublicId: string;
  title: string;
  price: number;
  sizeTitle: string;
  description: string;
};

export type UpdateProductInputType = {
  subcategoryId: string;
  imagePublicId: string;
  title: string;
  description: string;
  productId: string;
};

export type CreateProductSubCategoryInputType = {
  shopId: string;
  title: string;
  description: string;
};

export type CreateTagInputType = {
  title: string;
  productId: string;
};

export type CreateSizeInputType = {
  title: string;
  productId: string;
  fullPrice: number;
};
