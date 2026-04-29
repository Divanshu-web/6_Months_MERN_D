const progressModel = require('./progressModel')

const addProgressToDB = async (req, res) => {
    try {
        const incomingData = req.body || {};
        let validation = "";
        if (!incomingData.mentorId) validation += 'mentorId is Required';
        if (!incomingData.sessionId) validation += 'sessiontId is Required';
        if (!incomingData.learnerId) validation += 'learnerId is Required';
        if (!incomingData.percentage) validation += 'percentage is Required';
        if (!incomingData.remarks) validation += 'remarks is Required';


        if (!!validation) {
            res.json({
                status: 400,
                success: false,
                message: validation
            })
        }

            let totalDocs = await progressModel.countDocuments({});

            const progressData = new progressModel({
                autoId: totalDocs + 1,
                mentorId: incomingData.mentorId,
                sessionId: incomingData.sessionId,
                learnerId: incomingData.learnerId,
                percentageId: incomingData.percentageId,
                remarksId: incomingData.remarksId,
               
            })
            await progressData.save();

            res.json({
                status: 201,
                success: true,
                message: "progress Saved",
                data: progressData
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
const getAllProgress = async (req, res) => {
    try {
        const dbData = await progressModel.find({ isDelete: false }).populate("sessionId").populate("learnerId").populate("mentorId");// to retrive all the documents
        const totalDocs = await progressModel.countDocuments({ isDelete: false });
        res.json({
            status: 200,
            success: true,
            message: "progress loaded successfully",
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
const getSingleProgress = async (req, res) => {
    try {
        const progressId = req.body?._id || {};

        if (!progressId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const progressdata = await progressModel.findOne({ _id: progressId, isDelete: false })

        if (!progressdata) {
            res.json({
                status: 404,
                success: false,
                message: "progress not found"
            })
        } else {
            res.json({
                status: 200,
                success: true,
                message: "progress fetched",
                data: progressdata
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

const updateProgress = async (req, res) => {
    try {
        const progressId = req.body?._id;
        const incomingData = req.body; 

        if (!progressId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const progressnew = await progressModel.findOne({ _id: progressId, });

        if (!progressnew) {
            res.json({
                status: 404,
                success: false,
                message: "No such progressnew exists"
            })
        } else {
            if (incomingData.percentage) {
                progressnew.percentage = incomingData.percentage
            }
            if (incomingData.remarks) {
                progressnew.remarks = incomingData.remarks
            }

            progressnew.updatedAt = Date.now()
            let savedData = await progressnew.save();

            res.json({
                status: 200,
                success: true,
                message: "progressnew Updated",
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
        const progressId = req.body?._id;

        if (!progressId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const progressdata = await progressModel.findOne({ _id: progressId })

        if (!progressdata) {
            res.json({
                status: 404,
                success: false,
                message: "No such task"
            })
        }

        progressdata.isDelete = true

        await progressdata.save()

        res.json({
            status: 200,
            success: true,
            message: "progress removed"
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
    addProgressToDB,
    getAllProgress,
    getSingleProgress,
    updateProgress,
    deleteSoft
}