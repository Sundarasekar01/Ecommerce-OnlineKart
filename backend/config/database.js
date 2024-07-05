const mongoose = require('mongoose');

const connectDB = ()=>{
    mongoose.connect(process.env.DB_URL)
    .then((msg) =>{
        console.log(`Database connected at ${msg.connection.host}`)
    })
}

module.exports = connectDB;

