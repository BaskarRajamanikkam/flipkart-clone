const { sendEmailOtp } = require("../mailConfig/verifyEmail");
const CatchAsyncError = require("../middlewares/CatchAsyncError");
const User = require("../models/UserModel");
const ErrorHandler = require("../utils/ErrorHandler");
const sendToken = require("../utils/sendToken");


exports.signup = CatchAsyncError(async(req,res,next)=>{
    const { username, email, password } = req.body;
    try {
        //check if a user already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            if(existingUser.isVerified){
                // if user is verified, avoid duplicate signup
                return next(new ErrorHandler('Email is already verified, please log in.',400));
            }else{
                // if user is not verified, update their data
                const otp = await existingUser.generateUserOTP(6);
                existingUser.username = username;
                existingUser.password = password;
                await existingUser.save();
                await sendEmailOtp(email,otp);
                return res.status(201).json({
                    success: true,
                    message: "OTP send your email, please verify",
                });
            }
        }
        // If no existing user, create a new one
        const newUser = new User({username,email,password});
        const otp = await newUser.generateUserOTP(6);
        await newUser.save();
        await sendEmailOtp(email, otp);
        return res.status(200).json({
            success: true,
            message: "OTP send your email, please verify",
        });
    } catch (error) {
        return next(new ErrorHandler(error,500));
    }
});



exports.verifyOtp = CatchAsyncError(async(req,res,next)=>{
    const {email, otp} = req.body;
    try {
        let user = await User.findOne({email, otpExpires:{$gt: Date.now()}});
        if(!user){
            return next(new ErrorHandler("OTP is expired",400));
        }
        const isMatchOTP = await user.compareOTP(otp);
        if(!isMatchOTP){
            return next(new ErrorHandler("Wrong OTP", 400));
        }
        user.isVerified = true;
        user.otp = undefined;
        user.otpExpires = undefined;
        await user.save();
        const message = "Signup successfully...";
        sendToken(user,201,res,message);
    } catch (error) {
        return next(new ErrorHandler(error,500));
    }
})