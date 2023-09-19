import { gql } from '@apollo/client';

export const QUERY_MONEY = gql`
    query money {
        money {
            money
        }
    }
`;

export const QUERY_PLOTS = gql`
    query plots {
        plots {
            farm {
                plots
            }
        }
    }
`;

// export const QUERY_VEGGIE = gql`
//     query veggie($cropName: String!) {
        
//         crop (cropName: $cropName){
//             amount
//         }
//     }
// `;

export const QUERY_FARM = gql`
    query farm {
        farm {
            farm{
            plantedCrops {
                    cropName
                    growTime
                
            }
        }
    }
}
`;