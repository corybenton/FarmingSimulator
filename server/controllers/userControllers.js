const { User } = require('../models');

module.exports = {
    async getUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.id }).select('-__v')
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}