const Category = require("../models/CategoryModel")



exports.create = async(req,res,next)=>{
    const categoryName = await Category.create(req.body);
    res.status(201).json({
        success: true,
        Category : categoryName
    })
}