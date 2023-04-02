import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        }
    }
);

const Review = mongoose.model('Review', ReviewSchema);

export default Review;