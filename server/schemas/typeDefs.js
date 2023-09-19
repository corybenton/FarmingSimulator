const typeDefs = `
    type User {
        username: String!
        email: String!
        password: String!
        farm: Farm
        money: Number
    }

    type Crop {
        cropName: String!
    }

    type Farm {
        plots: Number!
        plantedCrops: [Crop]
    }

    type Query {
        user: User
        crops: [Crop]
        farm: Farm
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`