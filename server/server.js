const app = require("./app");
const dotenv = require('dotenv');
const Database = require("./config/Database");

dotenv.config();

const PORT = process.env.PORT || 5000;


//Database Connection;
Database();

app.listen(PORT,()=>{
    console.log(`server running port: ${PORT}`)
})