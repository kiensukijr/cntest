import Review from "../models/Review.js";

//CREATE
export const createReview = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const newReview = new Review(req.body);
            const savedReview = await newReview.save();
            res.status(201).json(savedReview);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Access Denied')
    }
};

//READ 
export const getAllReviews = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const reviews = await Review.find();
            res.status(200).json(reviews);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Access Denied')
    } 
};

//READ RANDOM REVIEWS
export const getRandomReviews = async (req, res) => {
    try {
        const reviews = await Review.aggregate([
            { $sample: { size: 5 }},
        ])
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json(err);
    }
};

//UPDATE 
export const updateReview = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedReview = await Review.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {
                new: true,
            });
            res.status(200).json(updatedReview);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Access Denied')
    }
};

//DELETE 
export const deleteReview = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Review.findByIdAndDelete(req.params.id);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Access denied');
    }
};