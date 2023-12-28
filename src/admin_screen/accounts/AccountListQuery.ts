import {gql} from '@apollo/client';

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      imageUrl
      name
      phoneNumber
      account {
        id
        email
        createdAt
      }
    }
  }
`;

export const GET_ALL_SHOPS = gql`
  query GetAllShop {
    getAllShop {
      imageUri
      shopName
      shopPhoneNumber
      user {
        account {
          id
          createdAt
          email
        }
      }
    }
  }
`;

export const GET_ACCOUNT_BY_ID = gql`
  query GetAccountById($id: ID!) {
    getAccountById(id: $id) {
      id
      email
      createdAt
      user {
        id
        name
        phoneNumber
        imageUrl
        defaultAddress
        shop {
          id
          imageUri
          shopAddress
          shopName
          shopPhoneNumber
        }
      }
    }
  }
`;

export const GET_LIST_REPORTED_ACCOUNT = gql`
  query GetListReportedAccount($id: String!) {
    getListReportedAccount(accountId: $id) {
      id
      title
      message
      createdAt
      updatedAt
    }
  }
`;

export const GET_LIST_ACCOUNT_REPORT = gql`
  query GetListAccountReport($id: String!) {
    getListAccountReport(accountId: $id) {
      id
      title
      message
      createdAt
      updatedAt
    }
  }
`;

export const GET_REPORT_DETAILS = gql`
  query GetReportDetails($id: String!) {
    getReportDetails(id: $id) {
      id
      title
      message
      createdAt
      updatedAt

      reporter {
        user {
          imageUrl
          name
          phoneNumber
          defaultAddress
          shop {
            imageUri
            shopName
            shopPhoneNumber
            shopAddress
          }
        }
        email
      }

      reportAccount {
        accountReported {
          user {
            imageUrl
            name
            phoneNumber
            defaultAddress
            shop {
              imageUri
              shopName
              shopPhoneNumber
              shopAddress
            }
          }
          email
        }
      }
    }
  }
`;

// account {
//   email
//   createdAt
//   reportAccount {
//     id
//     createdAt
//     reportAccountDetail {
//       id
//       title
//       message
//     }
//   }
//   reportAccountDetail {
//     id
//     title
//     message
//     createdAt
//     reportAccount {
//         accountReported {
//           user {
//             name
//             account {
//               email
//             }
//             shop {
//               imageUri
//               shopName
//               shopPhoneNumber
//               shopAddress
//             }
//           }

//         }
//     }
//   }
// }
