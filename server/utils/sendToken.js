
const sendToken = (user, statusCode, res, message) =>{
    
    const token = user.getJwtAccessToken();

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", 
        sameSite: "strict",
        maxAge:  process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    };  

    res.status(statusCode)
    .cookie('access_token',token, options)
    .json({
        success: true,
        message,
    })
}


module.exports = sendToken;