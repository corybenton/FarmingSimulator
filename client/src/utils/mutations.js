import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const BUY_PLOT = gql`
  mutation buyPlot {
    buyPlot {
        farm {
            plots
        }
    }
  }
`;

export const PLANT_PLANT = gql`
    mutation plantPlant ($cropName: String!, $growTime: Number!) {
        plantPlant {
            farm {
                plantedCrops{
                    cropName
                    growTime
                }
            }
        }
}`