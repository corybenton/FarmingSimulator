const { User, Crop } = require('../models');

const resolvers = {
    Query: {
        user: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return User.find(params);
        },
        
    },
    Mutation: {

    },
};

module.exports = resolvers;