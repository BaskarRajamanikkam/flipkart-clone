const crypto = require('crypto');

/**
 * Generate a random OTP
 * @param {number} length Length of the OTP (default: 6 digits)
 * @returns {string} Generated OTP
 */


function generateOTP(length){
    const digits = '0123456789';
    let otp = '';
    for(let i = 0; i < length; i++){
        otp += digits[crypto.randomInt(0,digits.length)];
    }
    return otp.toString();
}


module.exports = {generateOTP};