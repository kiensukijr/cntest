import User from '../models/User.js'

//READ
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

//READ ALL
export const getAllUsers = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Access denied');
    }
};

//UPDATE
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {
            new: true,
        });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
};