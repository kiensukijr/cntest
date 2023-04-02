import mongoose from "mongoose";

const FoodSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        price: {
            type: Number,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        picturePath: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        isAvailable: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
    }
);

const Food = mongoose.model('Food', FoodSchema);

export default Food;