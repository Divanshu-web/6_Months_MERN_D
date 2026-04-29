const productModel = require('./productMode');

const add = async (req, res) => {
    try {
        const formData = req.body;
        const productObj = new productModel();
        productObj.name = formData.name;
        productObj.price = formData.price;
        productObj.categoryId = formData.categoryId;
        const saved = await productObj.save();
        
        res.status(200).json({
            success: true,
            status: 200,
            message: 'product saved successfully',
            data: saved
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}


const all = async (req, res) => {
    try {
        let products = await productModel.find().populate("categoryId")
        let total = await productModel.countDocuments()
        res.send({
            status: 200,
            success: true,
            data: products,
            message: "All Products Loaded",
            total: total
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}

const single = async (req, res) => {
    if (!req.body._id) {
        return res.send({
            success: false,
            status: 400,
            message: "_id is required"
        })
    }
    else {
        let product = await productModel.findOne({ _id: req.body._id }).populate("categoryId")
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
                message: "Product Loaded Successfully",
                date: product
            })
        }
    }
}


module.exports = { add, all, single }