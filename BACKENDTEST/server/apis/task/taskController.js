const taskModel = require('./taskModel')


// CREATE OPERATION
const add = async (req, res) => {
    try {
        const incomingData = req.body || {};

        let validation = "";

        if (!incomingData.title) {
            validation += "title is required"
        }
        if (!incomingData.descryption) {
            validation += "descryption is required"
        }
        if (!incomingData.status) {
            validation += "status is required"
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
            const existingData = await taskModel.findOne({ title: incomingData.title });
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

            const savedData = new taskModel({
                title: incomingData.title,
                descryption: incomingData.descryption,
                status: incomingData.status
            })

            await savedData.save();

            res.json({
                status: 201,
                success: true,
                message: "task created",
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
        const allData = await taskModel.find({isDelete : false});// to retrive all the documents
        const total = await taskModel.countDocuments({isDelete: false});
        res.json({
            status: 200,
            success: true,
            message: "tasks loaded successfully",
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


const update = async (req, res) => {
    try {
        const taskId = req.body?._id;
        const incomingData = req.body;

        if (!taskId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const task = await taskModel.findOne({ _id: taskId ,});

        if (!task) {
            res.json({
                status: 404,
                success: false,
                message: "No such task exists"
            })
        } else {
            if (incomingData.title) {
                task.title = incomingData.title
            }
            if (incomingData.descryption) {
                task.descryption = incomingData.descryption
            }
            if (incomingData.status) {
                task.status = incomingData.status
            }

            task.updatedAt = Date.now()
            let savedData = await task.save();

            res.json({
                status: 200,
                success: true,
                message: "task Updated",
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



const softDelete = async (req, res) => {
    try {
        const taskId = req.body?._id;

        if (!taskId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const task = await taskModel.findOne({ _id: taskId })

        if (!task) {
            res.json({
                status: 404,
                success: false,
                message: "No such task"
            })
        }

        task.isDelete = true

        await task.save()

        res.json({
            status: 200,
            success: true,
            message: "task removed"
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
    add, all, update, softDelete
}

