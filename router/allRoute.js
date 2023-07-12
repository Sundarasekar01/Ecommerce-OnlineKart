const express = require("express")
const route = express()



const con = require("../controller/all")

route.get('/',con.landing)
route.get('/home',con.home)
route.get('/sign-in',con.signIn)
route.get('/sign-out',con.signOut)
route.get('/sign-up',con.signUp)
route.get('/product',con.product)
route.get('/profile',con.profile)
route.get('/wishlist',con.wishlist)
route.get('/cart',con.cart)
route.get('/product-detail',con.productDetails)
route.get('/checkout',con.checkout)
route.get('/order',con.order)


module.exports=route;
