const Product = require('../models/productModel')


exports.getProducts = (req,res,next) =>{

    res.status(200).json({
        success : true,
        message : 'You can see all products'
    })
}

exports.addProduct = async (req,res,next)=> {

    const product = await Product.create(req.body);

    res.status(201).json({
        sucess: true,
        product
    })

}




