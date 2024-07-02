const app = require('./app')

const dotenv = require('dotenv');
const path = require('path');
const DBconnection = require('./config/database');

dotenv.config({path:path.join(__dirname,'/config/config.env')})

DBconnection();

app.listen(process.env.PORT,()=>{
    console.log(`Server at ${process.env.PORT} in ${process.env.NODE_ENV}`)
})