const typeDefs = `
    type Crop {
        cropName: String!
        amount: Int
        growTime: Int
    }

    type Farm {
        plots: Int!
        plantedCrops: [Crop]
    }

    type User {
        username: String!
        email: String!
        password: String!
        farm: Farm
        money: Int
        inventory: {
            item: String
            quantity: Int
        }
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: User
        farm: User
        money: User
        plots: User
        veggie: User
        crops: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        buyPlot: Farm
        
    }
`
module.exports = typeDefs;