


const landing = (req,res)=>{
    res.render('landing')
}

const home = (req,res)=>{
    res.render('home')
}


const signIn = (req,res)=>{
    res.render('sign-in')
}

const signOut = (req,res)=>{
    res.render('sign-out')
}

const signUp = (req,res)=>{
    res.render('sign-up')
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
    signIn,
    signOut,
    signUp,
    profile,
    product,
    wishlist,
    cart,
    productDetails,
    checkout,
    order,
    home
}