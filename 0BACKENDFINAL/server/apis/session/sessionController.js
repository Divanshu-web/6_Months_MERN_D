const sessionModel = require('./sessionModel')

const addSessionToDB = async (req, res) => {
    try {

        const incomingData = req.body || {};

        let validation = "";
        if (!incomingData.sessionName) validation += 'sessionName is Required';
        if (!incomingData.skillId) validation += 'skillId is Required';
        if (!incomingData.descryption) validation += 'descryption is Required';
        if (!incomingData.price) validation += 'price is Required';
        if (!incomingData.date) validation += 'date is Required';
        // if (!incomingData.time) validation += 'time is Required';
        if (!req.file) validation += 'thumbnail is Required';
        if (!incomingData.learnerMentorId) validation += 'learnerMentorId is Required';

        if (!incomingData.duration) validation += 'duration is Required';
        if (!incomingData.sessionType) validation += 'sessionType is Required';
        if (!incomingData.meetingLink) validation += 'meetingLink is Required';
        if (!incomingData.youtubeLink) validation += 'youtubeLink is Required';
        if (!incomingData.isPaid) validation += 'isPaid is Required';


        console.log(req.body);

        if (!!validation) {
            res.json({
                status: 400,
                success: false,
                message: validation
            })
        }
        else {
            const existingData = await sessionModel.findOne({ sessionName: incomingData.sessionName })
            if (!!existingData) {
                return res.json({
                    status: 400,  
                    success: false,
                    message: "session already exists"
                })
            }

            let totalDocs = await sessionModel.countDocuments({});

            const sessionData = new sessionModel({
                autoId: totalDocs + 1,

                sessionName: incomingData.sessionName,
                skillId: incomingData.skillId,
                descryption: incomingData.descryption,
                price: incomingData.price,
                date: incomingData.date,
                // time: incomingData.time,
                thumbnail: 'session/' + req.file.filename,
                learnerMentorId: incomingData.learnerMentorId,
                duration: incomingData.duration,
                sessionType: incomingData.sessionType,
                meetingLink: incomingData.meetingLink,
                youtubeLink: incomingData.youtubeLink,
                isPaid: incomingData.isPaid,

            })
            await sessionData.save();

            res.json({
                status: 201,
                success: true,
                message: "session Saved",
                data: sessionData
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


// READ OPERATION

// To GET ALL DOCUMENTS
const getAllSession = async (req, res) => {
    try {
        const dbData = await sessionModel.find({ isDelete: false }).populate("skillId").populate("learnerMentorId");// to retrive all the documents
        const totalDocs = await sessionModel.countDocuments({ isDelete: false });
        res.json({
            status: 200,
            success: true,
            message: "session loaded successfully",
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
const getSingleSession = async (req, res) => {
    try {
        const sessionId = req.body?._id || {};

        if (!sessionId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const sessiondata = await sessionModel.findOne({ _id: sessionId, isDelete: false })

        if (!sessiondata) {
            res.json({
                status: 404,
                success: false,
                message: "session not found"
            })
        } else {
            res.json({
                status: 200,
                success: true,
                message: "session fetched",
                data: sessiondata
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

const updateSession = async (req, res) => {
    try {
        const sessionId = req.body?._id;
        const incomingData = req.body;

        if (!sessionId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const sessionnew = await sessionModel.findOne({ _id: sessionId, });

        if (!sessionnew) {
            res.json({
                status: 404,
                success: false,
                message: "No such session new exists"
            })
        } else {
            if (incomingData.sessionName) {
                sessionnew.sessionName = incomingData.sessionName
            }
            if (incomingData.date) {
                sessionnew.date = incomingData.date
            }
            if (incomingData.descryption) {
                sessionnew.date = incomingData.descryption
            }
            if (incomingData.price) {
                sessionnew.price = incomingData.price
            }
            if (req.file) {
                sessionnew.thumbnail = 'session/' + req.file.filename
            }
            if (incomingData.duration) {
                sessionnew.duration = incomingData.duration
            }
            if (incomingData.descryption) {
                sessionnew.descryption = incomingData.descryption
            }
            if (incomingData.sessionType) {
                sessionnew.sessionType = incomingData.sessionType
            }
            if (incomingData.meetingLink) {
                sessionnew.meetingLink = incomingData.meetingLink
            }
            if (incomingData.youtubeLink) {
                sessionnew.youtubeLink = incomingData.youtubeLink
            }
            if (incomingData.isPaid) {
                sessionnew.isPaid = incomingData.isPaid
            }

            sessionnew.updatedAt = Date.now()
            let savedData = await sessionnew.save();

            res.json({
                status: 200,
                success: true,
                message: "sessionnew Updated",
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
        const sessionId = req.body?._id;

        if (!sessionId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const sessiondata = await sessionModel.findOne({ _id: sessionId })

        if (!sessiondata) {
            res.json({
                status: 404,
                success: false,
                message: "No such task"
            })
        }

        sessiondata.isDelete = true

        await sessiondata.save()

        res.json({
            status: 200,
            success: true,
            message: "session removed"
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
    addSessionToDB,
    getAllSession,
    getSingleSession,
    updateSession,
    deleteSoft
}