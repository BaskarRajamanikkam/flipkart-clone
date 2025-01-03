const mongoose =require('mongoose');


const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please Enter Category Name']
    }
},{timestamps: true});


const Category = mongoose.model('Category',categorySchema);

module.exports = Category;