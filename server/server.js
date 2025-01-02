const dotenv = require('dotenv');
dotenv.config();
const app = require("./app");
const Database = require("./config/Database");


const PORT = process.env.PORT || 8000;


//Database Connection;
Database();

app.listen(PORT,()=>{
    console.log(`server running port: ${PORT} on ${process.env.NODE_ENV} mode`)
})