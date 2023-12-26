import {gql} from '@apollo/client';

export const CREATE_ORDER_PRODUCT = gql`
  mutation CreateOrderProduct($orderProducts: [orderProductInput!]!) {
    createOrderProduct(orderProducts: $orderProducts)
  }
`;
