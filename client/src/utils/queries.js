import { gql } from '@apollo/client';

export const QUERY_MONEY = gql`
    query money {
        User {
            money
        }
    }
`;

export const QUERY_PLOTS = gql`
    query plots {
        Farm {
            plots
        }
    }
`;

export const QUERY_VEGGIE = gql`
    query veggie($cropName: String!) {
        Crop (cropName: $cropName){
            amount
        }
    }
`;