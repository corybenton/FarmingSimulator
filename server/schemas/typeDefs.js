const typeDefs = `
    type User {
        username: String!
        email: String!
        password: String!
        money: Number
    }

    type Crop {
        cropName: String!
    }

    type Farm {
        plots: Number!
        plantedCrops: [Crop]
    }
`