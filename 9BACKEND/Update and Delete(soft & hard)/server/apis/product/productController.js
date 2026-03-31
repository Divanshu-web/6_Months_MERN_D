const productModel = require('./productModel')


// CREATE OPERATION
const add = async (req, res) => {
    try {
        const incomingData = req.body || {};

        let validation = "";

        if (!incomingData.name) {
            validation += "name is required"
        }
        if (!incomingData.price) {
            validation += "price is required"
        }
        if (!incomingData.stock) {
            validation += "stock is required"
        }

        if (!!validation) {
            return res.json({
                status: 400,
                success: false,
                message: validation
            })
        }

        else {
            // DUPLICACY CHECK
            const existingData = await productModel.findOne({ name: incomingData.name });
            console.log("Existing data: ", existingData);// to be checked by students

            // find - [] // array of documents - [{}] / []
            // findOne - to fetch single document {} / null

            if (!!existingData) { // to check if there is any data
                return res.json({
                    status: 400,
                    success: false,
                    message: "Data already exists"
                })
            }

            const savedData = new productModel({
                name: incomingData.name,
                price: incomingData.price,
                stock: incomingData.stock
            })

            await savedData.save();

            res.json({
                status: 201,
                success: true,
                message: "Data created",
                data: savedData
            })
        }
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "Internal Server Error: " + err.message
        })
    }
}


// READ OPERATION

// To GET ALL DOCUMENTS
const all = async (req, res) => {
    try {
        const allData = await productModel.find({isDelete : false});// to retrive all the documents
        const total = await productModel.countDocuments({isDelete: false});
        res.json({
            status: 200,
            success: true,
            message: "Products loaded successfully",
            total: total,
            data: allData
        })
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "Internal Server Error: " + err,
        })
    }
}

const single = async (req, res) => {
    try {
        const productId = req.body?._id;

        if (!productId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const product = await productModel.findOne({ _id: productId, isDelete :false })

        if (!product) {
            res.json({
                status: 404,
                success: false,
                message: "product not found"
            })
        } else {
            res.json({
                status: 200,
                success: true,
                message: "product fetched",
                data: product
            })
        }
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "Internal Server Error: " + err,
        })
    }
}


const update = async (req, res) => {
    try {
        const productId = req.body?._id;
        const incomingData = req.body;

        if (!productId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const product = await productModel.findOne({ _id: productId });

        if (!product) {
            res.json({
                status: 404,
                success: false,
                message: "No such product exists"
            })
        } else {
            if (incomingData.name) {
                product.name = incomingData.name
            }
            if (incomingData.price) {
                product.price = incomingData.price
            }
            if (incomingData.stock) {
                product.stock = incomingData.stock
            }

            product.updatedAt = Date.now()
            let savedData = await product.save();

            res.json({
                status: 200,
                success: true,
                message: "Product Updted",
                data: savedData
            })

        }
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "ISE: " + err.message
        })
    }
}


const hardDelete = async (req, res) => {
    try {
        const productId = req.body?._id;

        if (!productId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const product = await productModel.findOne({ _id: productId });

        if (!product) {
            res.json({
                status: 404,
                success: false,
                message: "No such product exists"
            })
        }

        const deletedProduct = await productModel.deleteOne({ _id: productId });

        res.json({
            status: 200,
            success: true,
            message: "Product Deleted"

        })
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "ISE" + err.message
        })
    }
}



const softDelete = async (req, res) => {
    try {
        const productId = req.body?._id;

        if (!productId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const product = await productModel.findOne({ _id: productId })

        if (!product) {
            res.json({
                status: 404,
                success: false,
                message: "No such product"
            })
        }

        product.isDelete = true

        await product.save()

        res.json({
            status: 200,
            success: true,
            message: "Prdouct removed"
        })

    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "ISE: " + err.message
        })
    }

}



module.exports = {
    add, all, single, update, softDelete, hardDelete
}

