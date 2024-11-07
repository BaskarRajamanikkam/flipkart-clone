const CatchAsyncError = require("../middlewares/CatchAsyncError");
const Product = require("../models/ProductModel");
const ErrorHandler = require("../utils/ErrorHandler");

exports.getAllProducts = CatchAsyncError(async (req, res, next) => {});


// Create Products for Admin
exports.createProduct =CatchAsyncError(async (req, res, next) => {

});
