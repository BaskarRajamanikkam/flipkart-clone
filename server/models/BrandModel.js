const mongoose =require('mongoose');


const brandSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter Brand Name"],
    },
    logo:[
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
    ]
})

const Brand = mongoose.model('Brand',brandSchema);

module.exports = Brand;