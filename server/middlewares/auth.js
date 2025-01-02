const ErrorHandler = require("../utils/ErrorHandler");
const CatchAsyncError = require("./CatchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

exports.isAuthenticated = CatchAsyncError(async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }
   
    if(!token){
        return next(new ErrorHandler('please login to access',401));
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_ACCESS_TOKEN_KEY);
        req.user = await User.findById(decoded.id);
        next();
  } catch (error) {
    return next(new ErrorHandler("Invalid or expired token", 403));
  }
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(`Role: ${req.user.role} is not allowed`, 403)
      );
    }
    next();
  };
};
