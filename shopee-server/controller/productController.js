const Product = require('../models/product')


const listAllProduct = async (req, res) => {
    try {
        const products = await Product.find({})
        if (!products) {
            res.status(404).json()
        }

        res.json(products)
    } catch (e) {
        res.status(500).send(e)
    }
}


const createProduct = async (req, res) => {
    const products = new Product(req.body)
    try {
        await products.save()
        res.status(201).send(products)
    } catch (e) {
        res.status(500).send(e)
    }
}



module.exports = {
    listAllProduct,
    createProduct
}