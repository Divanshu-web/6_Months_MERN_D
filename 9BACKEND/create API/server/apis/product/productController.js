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
            const existingData = await productModel.findOne({name: incomingData.name})

            if(!!existingData){
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


module.exports = {
    add
}