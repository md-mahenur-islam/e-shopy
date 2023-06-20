import mongoose from "mongoose";
import { ST } from "next/dist/shared/lib/utils";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter product name']
    },
    description:{
        type: String,
        required: [true, 'Please enter product description']
    },
    price:{
        type: Number,
        required: [true, 'Please enter product price']
    },
    Images: [
        {
            public_id: {
                type: String
            },
            url: {
                type: String
            },
        }
    ],

    category: {
        type: String,
        required: [true, 'Please enter product category'],
        enum: {
            values:[
                'Electronics',
                'Mobiles',
                'Laptops',
                'Desktop',
                'Accessories',
                'Headphones',
                'Tablets',
                'Microphones',
                'Cameras',
                'Sports',
            ],
            message: 'Please select correct category'
        }
    },
    seller:{
        type: String,
        required: [true, 'Please enter product seller']
    },
    stock:{
        type: Number,
        required: [true, 'Please enter product stock']
    },
    ratings:{
        type: Number,
        default: 0
    },
    reviews:[
        {
            rating: {
                type: Number,
                required: true
            },
            comment:{
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],

});

export default mongoose.models.Product || mongoose.model('Product', productSchema);