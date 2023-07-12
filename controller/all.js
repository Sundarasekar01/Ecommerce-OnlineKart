


const landing = (req,res)=>{
    res.render('landing')
}


const login = (req,res)=>{
    res.render('login')
}

const register = (req,res)=>{
    res.render('register')
}

const logout = (req,res)=>{
    res.render('logout')
}

const profile = (req,res)=>{
    res.render('profile')
}

const wishlist = (req,res)=>{
    res.render('wishlist')
}

const product = (req,res)=>{
    res.render('product')
}

const cart = (req,res)=>{
    res.render('cart')
}

const checkout = (req,res)=>{
    res.render('checkout')
}

const order = (req,res)=>{
    res.render('order')
}


const productDetails = (req,res)=>{
    res.render('product-detail')
}

module.exports={
    landing,
    login,
    register,
    logout,
    profile,
    product,
    wishlist,
    cart,
    productDetails,
    checkout,
    order
}