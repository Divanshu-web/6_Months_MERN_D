const productModel = require('./productModel')

const add = async (req, res) => {
    try {
        const incomingData = req.body || {};
        let validation = "";
        if (!incomingData.name) validation += 'name is Required';
        if (!incomingData.price) validation += 'price is Required';
        if (!incomingData.description) validation += 'description is Required';
        if (!incomingData.stock) validation += 'stock is Required';
        if (!!validation) {
            res.json({
                status: 400,
                success: false,
                message: validation
            })
        }
        else {
            const existingData = await productModel.findOne({ name: incomingData.name })

            if (!!existingData) {
                return res.json({
                    status: 400,
                    success: false,
                    message: "Product already exists"
                })
            }
            const newData = new productModel({
                name: incomingData.name,
                price: incomingData.price,
                description: incomingData.description,
                stock: incomingData.stock,
            })
            await newData.save();

            res.json({
                status: 201,
                success: true,
                message: "Product Saved",
                data: newData
            })

        }

    } catch (err) {
        return res.json({
            status: 500,
            success: false,
            message: "Internal Server Error: " + err.message
        })
    }
}



const all = async (req, res) => {
    let allProducts = await productModel.find()
    let total = await productModel.countDocuments()
    res.send({
        success: true,
        status: 200,
        message: " All Products Loaded",
        total: total,
        data: allProducts

    })
}

const single = async (req, res) => {
    if (!req.body._id) {
        res.send({
            success: false,
            status: 400,
            message: "_id is required"
        })
    }
    else {
        let product = await productModel.findOne({ _id: req.body._id })
        if (!product) {
            res.send({
                success: false,
                status: 404,
                message: "Product Not Found"
            })
        }
        else {
            res.send({
                success: true,
                status: 200,
                message: "Product Loaded",
                data: product
            })
        }

    }
}

module.exports = {
    add, all , single
}