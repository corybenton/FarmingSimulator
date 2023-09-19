const { Crop, Farm, User  } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return User.find(params);
        },
        crops: async () => {
            return Crop.find({});
        },
        farm: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return Farm.find(params);
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
        
            if (!user) {
                throw AuthenticationError;
            }
        
            const correctPw = await user.isCorrectPassword(password);
        
            if (!correctPw) {
                throw AuthenticationError;
            }
        
            const token = signToken(user);
        
            return { token, user };
        },
        buyPlot: async (parent, { _id }) => {
            const farm = await User.findOneAndUpdate({_id :id}, {$inc : {'farm.plots' : 1}});
        }
    }
}

module.exports = resolvers;