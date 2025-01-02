const upload = require("../helpers/multerConfig");
const CatchAsyncError = require("../middlewares/CatchAsyncError");
const Brand = require("../models/BrandModel");
const ErrorHandler = require("../utils/ErrorHandler");



exports.uploadBrandImages = upload('brands').single('logo');
exports.createBrand = CatchAsyncError(async(req,res,next)=>{
    const {name} = req.body;
  try {
    const brand = await Brand.create({
        name,
        logo: [
            {
                public_id: req.file.filename,
                url: req.file.path
            }
        ]
    });
    await brand.save();
    return res.status(201).json({
        success:true,
        message: "Brand created successfully.",
    })
  } catch (error) {
    return next(new ErrorHandler(error,500));
  }
})