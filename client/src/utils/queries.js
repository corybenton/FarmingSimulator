import { gql } from '@apollo/client';

export const QUERY_MONEY = gql`
    query money {
        money {
        user {
            money
        }
    }
}
`;

export const QUERY_PLOTS = gql`
    query plots {
        farm {
            plots
        }
    }
`;

export const QUERY_VEGGIE = gql`
    query veggie($cropName: String!) {
        crop (cropName: $cropName){
            amount
        }
    }
`;

export const QUERY_FARM = gql`
    query farm {
        farm {
            plantedCrops {
                crop {
                    cropName
                    growTime
                }
            }
        }
    }
`;