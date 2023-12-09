import {gql} from '@apollo/client';

export const GET_ALL_CART_PRODUCT_OF_USER = gql`
  query GetAllCartProductOfUser($userId: ID!) {
    getAllCartProductOfUser(userId: $userId) {
      id
      fullPrice
      productSize {
        title
        fullPrice
        product {
          title
          imageUri
        }
      }
      amount
    }
  }
`;

export const DELETE_A_CART_PRODUCT = gql`
  mutation DeleteCartProduct($cartProductId: ID!) {
    deleteCartProduct(cartProductId: $cartProductId)
  }
`;

export const DELETE_ALL_CART_OF_USER = gql`
  mutation DeleteAllCartProductsOfUser($userId: ID!) {
    deleteAllCartProductsOfUser(userId: $userId)
  }
`;
