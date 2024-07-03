const Product = require('../models/productModel')


exports.getProducts = async (req, res, next) => {

    try {
        const products = await Product.find()

        res.status(200).json({
            success: true,
            message: 'You can see all products',
            count: products.length,
            products
        })
    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }


}

exports.addProduct = async (req, res, next) => {

    try{
        const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })

    }catch(error){

        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
}

exports.getSingleProduct = async (req, res, next) => {

    try{
        const product = await Product.findById(req.params.id)

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    res.status(201).json({
        success: true,
        product
    })
    }catch(error){

        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
}


exports.updateProduct = async (req, res, next) => {

    try{
        let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(201).json({
        success: true,
        product
    })
    }catch(error){
        
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
}



exports.deleteProduct = async (req, res, next) => {

   try{
    const product = await Product.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success: true,
        product
    })

   }catch(error){
    console.log(error.message)
   }
}



