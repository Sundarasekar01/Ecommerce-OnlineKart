const express = require("express")
const route = express()



const con = require("../controller/all")

route.get('/',con.landing)
route.get('/login',con.login)
route.get('/register',con.register)
route.get('/logout',con.logout)
route.get('/product',con.product)
route.get('/profile',con.profile)
route.get('/wishlist',con.wishlist)
route.get('/cart',con.cart)

module.exports=route;
