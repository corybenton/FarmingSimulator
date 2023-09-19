const { Crop, Farm, User  } = require('../models');
import { signToken, AuthenticationError } from '../utils/auth';

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
          buyPlot: async (parent, args) => {
            plots = plots + 1;
            return plots;
        }
    }
}

module.exports = resolvers;