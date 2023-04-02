import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
    {
        user_id: {
            type: String, 
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        note: {
            type: String,
            default: '',
        },
        products: [{
            product_id: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            total: {
                type: Number,
                required: true,
            }
        }],
        status: {
            type: Boolean,
            default: false,
        }
    }
);

const Order = mongoose.model('Order', OrderSchema);

export default Order;