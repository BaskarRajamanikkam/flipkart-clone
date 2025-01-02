const CatchAsyncError = require("../middlewares/CatchAsyncError");
const Category = require("../models/CategoryModel")



exports.createCategorry =CatchAsyncError(async(req,res,next)=>{
    const categoryName = await Category.create(req.body);
    res.status(201).json({
        success: true,
        Category : categoryName
    })
});