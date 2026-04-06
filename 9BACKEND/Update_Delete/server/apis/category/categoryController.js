const category = require('./categoryModel')

const add = (req, res) => {
    const incomingData = req.body || {};

    let validation = "";

    if (!incomingData.category) { validation += "category is required" }
    if (!incomingData.name) { validation += "name is required" }
    if (!incomingData.class) { validation += "class is required" }

    if (!!validation) {
        return res.json({
            status: 400,
            success: false,
            message: true
        })
    }


    else {
        const existingData = category.findOne({ name: incomingData.name });

        if (!!existingData) {
            return res.json({
                status: 400,
                success: false,
                message: true
            })
        }
        const saveData = new category({
            name : incomingData.name,

        })
    }
}
