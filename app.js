const express = require("express")
const app = express()
const route = require("./router/allRoute")
const path= require("path")

app.use(express.static('public'));






app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));



app.use("/", route)

app.listen(4000, ()=>{
    console.log('server started at 4000')
})