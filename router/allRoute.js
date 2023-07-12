const express = require("express")
const route = express()



const con = require("../controller/all")

route.get('/',con.landing)
route.get('/login',con.login)
route.get('/register',con.register)


module.exports=route;
