import {gql} from '@apollo/client';

export const GET_SHOP_BY_ID = gql`
  query GetShopById($getShopById: ID!) {
    getShopById(id: $getShopById) {
      id
      shopName
      shopAddress
      shopPhoneNumber
      imageUri
    }
  }
`;
