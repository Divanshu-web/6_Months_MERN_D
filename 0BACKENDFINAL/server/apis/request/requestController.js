const requestModel = require('./requestModel')

const addRequestToDB = async (req, res) => {
    try {
        const incomingData = req.body || {};
        let validation = "";
        if (!incomingData.mentorId) validation += 'mentorId is Required';
        if (!incomingData.sessionId) validation += 'sessionId is Required';
        if (!incomingData.learnerId) validation += 'learnerId is Required';
        if (!incomingData.dateSlot) validation += 'dateSlot is Required';
        if (!incomingData.paymentStatus) validation += 'paymentStatus is Required';
        if (!incomingData.requestStatus) validation += 'requestStatus is Required';


        if (!!validation) {
            res.json({
                status: 400,
                success: false,
                message: validation
            })
        }

            let totalDocs = await requestModel.countDocuments({});

            const requestData = new requestModel({
                autoId: totalDocs + 1,
                mentorId: incomingData.mentorId,
                sessionId: incomingData.sessionId,
                learnerId: incomingData.learnerId,
                dateSlot: incomingData.dateSlot,
                paymentStatus: incomingData.paymentStatus,
                requestStatus: incomingData.requestStatus,

            })
            await requestData.save();

            res.json({
                status: 201,
                success: true,
                message: "request Saved",
                data: requestData
            })
    } catch (err) {
        return res.json({
            status: 500,
            success: false,
            message: "Internal Server Error: " + err.message
        })
    }
}


// READ OPERATION

// To GET ALL DOCUMENTS
const getAllRequest = async (req, res) => {
    try {
        const dbData = await requestModel.find({ isDelete: false }).populate("mentorId").populate("sessionId");// to retrive all the documents
        const totalDocs = await requestModel.countDocuments({ isDelete: false });
        res.json({
            status: 200,
            success: true,
            message: "request loaded successfully",
            total: totalDocs,
            data: dbData
        })
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "Internal Server Error: " + err,
        })
    }
}

// // TO GET SINGLE MOVIE
const getSingleRequest = async (req, res) => {
    try {
        const requestId = req.body?._id || {};

        if (!requestId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const requestdata = await requestModel.findOne({ _id: requestId, isDelete: false })

        if (!requestdata) {
            res.json({
                status: 404,
                success: false,
                message: "request not found"
            })
        } else {
            res.json({
                status: 200,
                success: true,
                message: "request fetched",
                data: requestdata
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


// UPDATE

const updateRequest = async (req, res) => {
    try {
        const requestId = req.body?._id;
        const incomingData = req.body;

        if (!requestId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const requestnew = await requestModel.findOne({ _id: requestId, });

        if (!requestnew) {
            res.json({
                status: 404,
                success: false,
                message: "No such requestnew exists"
            })
        } else {
            if (incomingData.dateSlot) {
                requestnew.dateSlot = incomingData.dateSlot
            }
            if (incomingData.paymentStatus) {
                requestnew.paymentStatus = incomingData.paymentStatus
            }
            if (incomingData.requestStatus) {
                requestnew.requestStatus = incomingData.requestStatus
            }

            requestnew.updatedAt = Date.now()
            let savedData = await requestnew.save();

            res.json({
                status: 200,
                success: true,
                message: "requestnew Updated",
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


// DELETE - 

const deleteSoft = async (req, res) => {
    try {
        const requestId = req.body?._id;

        if (!requestId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const requestdata = await requestModel.findOne({ _id: requestId })

        if (!requestdata) {
            res.json({
                status: 404,
                success: false,
                message: "No such task"
            })
        }

        requestdata.isDelete = true

        await requestdata.save()

        res.json({
            status: 200,
            success: true,
            message: "request removed"
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
    addRequestToDB,
    getAllRequest,
    getSingleRequest,
    updateRequest,
    deleteSoft
}