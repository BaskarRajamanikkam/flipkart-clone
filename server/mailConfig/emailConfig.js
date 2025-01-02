const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    tls: {
        rejectUnauthorized: false
    },
    auth:{
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASS
    }
});

module.exports = transporter;