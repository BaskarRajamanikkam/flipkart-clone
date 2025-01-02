const mongoose = require("mongoose");
const { generateOTP } = require("../utils/otpHandler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      select: false,
      required: function () {
        return this.provider === "email";
      },
    },
    provider: {
      type: String,
      enum: ["email", "google"],
      default: "email",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    role:{
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    otp: String,
    otpExpires: Date,
  },
  { timestamps: true }
);

// Ensure Virtual fields are included in JSON Response
userSchema.set("toJSON", { virtuals: true });
userSchema.set("toObject", { virtuals: true });

//password hash before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// generate otp with user
userSchema.methods.generateUserOTP = async function (length) {
  const otp = generateOTP(length);
  const salt = await bcrypt.genSalt(10);
  this.otp = await bcrypt.hash(otp, salt);
  this.otpExpires = Date.now() + 3 * 60 * 1000;
  return otp;
};

// Compare OTP
userSchema.methods.compareOTP = function (enteredOtp) {
  return bcrypt.compare(enteredOtp, this.otp);
};

// access token generate for 7 days only
userSchema.methods.getJwtAccessToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_ACCESS_TOKEN_KEY, {
    expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRE, // 7 days;
  });
};

const User = mongoose.model("User", userSchema);
module.exports = User;
