const upload = require("../helpers/multerConfig");
const CatchAsyncError = require("../middlewares/CatchAsyncError");
const Brand = require("../models/BrandModel");
const Category = require("../models/CategoryModel");
const Product = require("../models/ProductModel");
const ApiFeatures = require("../utils/ApiFeatures");
const ErrorHandler = require("../utils/ErrorHandler");


//get all products
exports.getAllProducts = CatchAsyncError(async (req, res, next) => {
try {
 const features = new ApiFeatures(Product, req.query);
 const products = await features.search(
  ["name","highlights",],// Fields to search in Product model
  [
    {model: Brand, field:"name", refField:"brand"},// Search Brand model and match Product's `brand` field
    {model: Category, field:"name", refField: "category"},// Search Category model and match Product's `category` field
  ],
  ["price","cuttedPrice"]
 )
 

  res.status(200).json({
    success:true,
    count: products.length,
    data: products,
  });
} catch (error) {
  console.log(error)
}
});


// Get Product Details
exports.getProductDetails = CatchAsyncError(async (req, res, next) => {

  const product = await Product.findById(req.params.id).populate("brand","name logo");

  if (!product) {
      return next(new ErrorHandler("Product Not Found", 404));
  }

  res.status(200).json({
      success: true,
      product,
  });
});



//ADMIN
// Create Products for Admin
exports.uploadProductImages = upload("products").array("images", 10);
exports.createProduct = CatchAsyncError(async (req, res, next) => {
    const {name,highlights,price,cuttedPrice,category,brand,stock,warranty,ratings,numOfReviews,reviews} = req.body;
  try {
    const images = req.files.map((file) => ({
      public_id: file.filename,
      url: file.path,
    }));
    const product = await Product.create({
      name,
      highlights : highlights ? JSON.parse(highlights) : [],
      price,
      cuttedPrice,
      images,
      category,
      brand,
      stock,
      warranty,
      ratings,
      numOfReviews,
      reviews : reviews || [],
      user :req.user.id,
    });
    await product.save();
    return res.json("ok");
  } catch (error) {
    return next(new ErrorHandler(error, 500));
  }
});
