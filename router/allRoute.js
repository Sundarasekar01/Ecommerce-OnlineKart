const express = require("express")
const route = express()



const con = require("../controller/all")

route.get('/',con.landing)
route.get('/login',con.login)
route.get('/register',con.register)
route.get('/logout',con.logout)
route.get('/product',con.logout)
route.get('/profile',con.logout)
route.get('/wishlist',con.logout)
route.get('/cart',con.logout)

module.exports=route;
