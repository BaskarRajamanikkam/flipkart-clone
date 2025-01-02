const { default: mongoose, mongo } = require("mongoose");


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter product name"],
        trim: true
    },
    highlights: [
        {
            type: String,
            required: true
        }
    ],
    price: {
        type: Number,
        required: [true, "Please enter product price"]
    },
    cuttedPrice: {
        type: Number,
        required: [true, "Please enter cutted price"]
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    brand:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: true,
    },
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxlength: [4, "Stock cannot exceed limit"],
        default: 1
    },
    warranty: {
        type: Number,
        default: 1
    },
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews:[
        {
            user:{
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true,
            },
            name:{
                type: String,
                required: true,
            },
            rating:{
                type:String,
                required:true,
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    }
},{timestamps:true});



const Product = mongoose.model('Product',productSchema);
module.exports = Product;