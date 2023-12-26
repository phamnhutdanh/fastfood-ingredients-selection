import {gql} from '@apollo/client';

export const CREATE_ORDER_PRODUCT = gql`
  mutation CreateOrderProduct($orderProducts: [orderProductInput!]!) {
    createOrderProduct(orderProducts: $orderProducts)
  }
`;

export const GET_ORDER_BY_ID = gql`
  query GetOrderById($orderId: ID!) {
    getOrderById(id: $orderId) {
      id
      commentary
      totalCost
      count
      deliveredAt
      deliveryAddress
      productSize {
        title
        fullPrice
        product {
          imageUri
          title
          productSubcategory {
            productCategory {
              shop {
                shopName
                shopPhoneNumber
                imageUri
              }
            }
          }
        }
      }
      status
      createdAt
      updatedAt
      user {
        name
        imageUrl
        account {
          email
        }
        phoneNumber
      }
    }
  }
`;

export const CANCEL_ORDER = gql`
  mutation CancelOrder($orderId: ID!) {
    cancelOrder(orderId: $orderId)
  }
`;
