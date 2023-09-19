const { Crop, Farm, User  } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            const userId = context.user._id;
            const user = User.findById(userId);
            return user;
        },
        crops: async (parent, args, context) => {
            const userId = context.user._id;
            const user = User.findById(userId);
            return user;
        },
        farm: async (parent, args, context) => {
            const userId = context.user._id;
            const user = User.findById(userId);
            return user;
        },
        money: async (parent, args, context) => {
            const userId = context.user._id;
            const user = User.findById(userId);
            return user;
        },
        plots: async (parent, args, context) => {
            const userId = context.user._id;
            const user = User.findById(userId);
            return user;
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            try {
            const farm = await Farm.create({});
            const user = await User.create({ username, email, password });
            await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { farm: farm._id } }
              );
            const token = signToken(user);
            return { token, user };
            } catch (err) {
                console.error(err);
            }
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
        buyPlot: async (parent, args, context) => {
            const userId = context.user._id;
            const user = User.findById(userId);
            const money = user.money.money - (user.plots.plots * 1000)
            const plots = user.farm.plots + 1;
            return money, plots;
        },
        plantPlant: async (parent, { cropName, growTime }, context) => {
            const userId = context.user._id;
            const user = User.findById(userId);
            //user.farm.plantedCrops = ...user.farm.plantedCrops + {cropName, growTime}
        }
    }
}

module.exports = resolvers;