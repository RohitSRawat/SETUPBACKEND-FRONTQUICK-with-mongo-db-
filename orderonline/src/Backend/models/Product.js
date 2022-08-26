const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    paragraph: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
    },
    avatar: {
        type: Buffer,
        required: true,

    },
    popular:{
        type:Boolean,
        required: true,

    }
}, {
    timestamps: true
})

const ProductModel = mongoose.model('Product', Product)

module.exports = ProductModel