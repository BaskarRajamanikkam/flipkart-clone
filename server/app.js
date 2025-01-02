const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const error = require('./middlewares/error');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const corsOptions ={
    origin: 'https://flipkart-clone-1-kex9.onrender.com', // Specify the origin you want to allow
    credentials: true, // Allow credentials (cookies, authorization headers)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};


// Middleware for development mode
if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}
//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser());

const category = require('./routes/CategoryRoutes');
const product = require('./routes/ProductRoutes');
const brand = require('./routes/BrandRoutes');
const user = require('./routes/UserRoutes');

app.use('/api',category)
app.use('/api',product);
app.use('/api',brand);
app.use('/api',user);



app.use(error);

module.exports = app;