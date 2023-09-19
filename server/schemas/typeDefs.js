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
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: User
        crops: Farm
        money: User
        plots: Farm
        veggie: Crop
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        buyPlot: Farm
        plantPlant: Farm
    }
`
module.exports = typeDefs;