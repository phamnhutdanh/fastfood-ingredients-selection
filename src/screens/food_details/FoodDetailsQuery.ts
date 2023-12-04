import {gql} from '@apollo/client';

export const GET_FOOD_BY_ID = gql`
  query GetProductById($getProductById: ID!) {
    getProductById(id: $getProductById) {
      id
      imageUri
      fullPrice
      ProductTag {
        title
      }
      ProductSize {
        title
        fullPrice
      }
      title
      description
      averageRatingScores
      productSubcategory {
        productCategory {
          shop {
            id
            shopName
          }
        }
      }
    }
  }
`;
