const express = require("express")
const app = express()

app.set('view engine', 'ejs');

app.use(express.static('public'));


const route = require('./router/allRoute')
app.use("/",route);


app.listen(5000, ()=>{
    console.log('server started at 5000')
})