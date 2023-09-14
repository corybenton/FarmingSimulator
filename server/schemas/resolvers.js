const { Crop, Farm, User  } = require('../models');

const resolvers = {
    Query: {
        user: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return User.find(params);
        },
        crops: async () => {
            return Crop.find({});
        }
    }
}

module.exports = resolvers;