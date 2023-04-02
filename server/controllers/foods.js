import Food from '../models/Food.js';

//CREATE
export const createFood = async (req, res) => {
    if (req.user.isAdmin) {
        const newFood = new Food(req.body);
        try {
            const savedFood = await newFood.save();
            res.status(201).json(savedFood);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Access Denied');
    }
};

//READ
export const getFood = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        res.status(200).json(food);
    } catch (err) {
        res.status(500).json(err);
    }
};

//READ ALL
export const getAllFoods = async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (err) {
        res.status(500).json(err);
    }
};

//UPDATE
export const updateFood = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedFood = await Food.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {
                new: true,
            });
            res.status(200).json(updatedFood);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Access Denied')
    }
};

//DELETE
export const deleteFood = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Food.findByIdAndDelete(req.params.id);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Access denied');
    }
};