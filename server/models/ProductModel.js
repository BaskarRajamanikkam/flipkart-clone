const { default: mongoose } = require("mongoose");


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter product name"],
        trim: true
    },
    // highlights: [
    //     {
    //         type: String,
    //         required: true
    //     }
    // ],
    // specifications: [
    //     {
    //         title: {
    //             type: String,
    //             required: [true, "Please enter specifications title"],
    //         },
    //         description: {
    //             type: String,
    //             required: [true, "Please enter specifications description"],
    //         }
    //     }
    // ],
    // price: {
    //     type: Number,
    //     required: [true, "Please enter product price"]
    // },
    // cuttedPrice: {
    //     type: Number,
    //     required: [true, "Please enter cutted price"]
    // },
    // images: [
    //     {
    //         public_id: {
    //             type: String,
    //             required: true
    //         },
    //         url: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ],
    // stock: {
    //     type: Number,
    //     required: [true, "Please enter product stock"],
    //     maxlength: [4, "Stock cannot exceed limit"],
    //     default: 1
    // },
    // warranty: {
    //     type: Number,
    //     default: 1
    // },
    // ratings: {
    //     type: Number,
    //     default: 0
    // },
    // numOfReviews: {
    //     type: Number,
    //     default: 0
    // },
},{timestamps:true});




const Product = mongoose.model('Product',productSchema);
module.exports = Product;