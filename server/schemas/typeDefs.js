const typeDefs = `
    type User {
        username: String!
        email: String!
        password: String!
        money: Number
    }

    type Crop {
        cropName: String!
        amount: Number
    }

    type Farm {
        plots: Number!
        plantedCrops: [Crop]
    }

    type Query {

    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`