const express = require('express');
const { signup, verifyOtp } = require('../controllers/UserController');
const router = express.Router();

// signup user for email verify
router.route('/signup').post(signup);

router.route('/verify-otp').post(verifyOtp);

module.exports = router;