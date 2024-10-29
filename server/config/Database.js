const mongoose = require('mongoose');


const Database = () =>{
    mongoose.connect(process.env.MONGODB)
    .then(con =>{
        console.log(`Mongodb is connect to the host: ${con.connection.host}`);
    }).catch(err=>{
        console.log(err);
    })
}
module.exports = Database;