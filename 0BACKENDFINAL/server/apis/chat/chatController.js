const chatModel = require('./chatModel')

const addChatToDB = async (req, res) => {
    try {
        const incomingData = req.body || {};
        let validation = "";
        if (!incomingData.mentorId) validation += 'mentorId is Required';
        if (!incomingData.requestId) validation += 'requestId is Required';
        if (!incomingData.learnerId) validation += 'learnerId is Required';
        if (!incomingData.message) validation += 'message is Required';


        if (!!validation) {
            res.json({
                status: 400,
                success: false,
                message: validation
            })
        }

            let totalDocs = await chatModel.countDocuments({});

            const chatData = new chat({
                autoId: totalDocs + 1,
                mentorId: incomingData.mentorId,
                sessionId: incomingData.sessionId,
                learnerId: incomingData.learnerId,
                message : {
                    senderId: incomingData.senderId,
                    chat:incomingData.chatId,
                    isSeen: incomingData.isSeen,
                    status: incomingData.status,
                    createdAt: incomingData.createdAt,
                }

            })
            await chatData.save();

            res.json({
                status: 201,
                success: true,
                message: "chat Saved",
                data: chatData
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
const getAllChat = async (req, res) => {
    try {
        const dbData = await chatModel.find({ isDelete: false }).populate("requestId").populate("learnerId").populate("mentorId");// to retrive all the documents
        const totalDocs = await chatModel.countDocuments({ isDelete: false });
        res.json({
            status: 200,
            success: true,
            message: "chat loaded successfully",
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
const getSingleChat = async (req, res) => {
    try {
        const chatId = req.body?._id || {};

        if (!chatId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const chatdata = await chatModel.findOne({ _id: chatId, isDelete: false })

        if (!chatdata) {
            res.json({
                status: 404,
                success: false,
                message: "chat not found"
            })
        } else {
            res.json({
                status: 200,
                success: true,
                message: "chat fetched",
                data: chatdata
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

const updateChat = async (req, res) => {
    try {
        const chatId = req.body?._id;
        const incomingData = req.body; 

        if (!chatId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const chatnew = await chatModel.findOne({ _id: chatId, });

        if (!chatnew) {
            res.json({
                status: 404,
                success: false,
                message: "No such chatnew exists"
            })
        } else {
            if (incomingData.senderId) {
                chatnew.senderId = incomingData.senderId
            }
            if (incomingData.message) {
                chatnew.message = incomingData.message
            }
            if (incomingData.isSeen) {
                chatnew.isSeen = incomingData.isSeen
            }
            if (incomingData.status) {
                chatnew.status = incomingData.status
            }
            if (incomingData.createdAt) {
                chatnew.createdAt = incomingData.createdAt
            }

            chatnew.updatedAt = Date.now()
            let savedData = await chatnew.save();

            res.json({
                status: 200,
                success: true,
                message: "chatnew Updated",
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
        const chatId = req.body?._id;

        if (!chatId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const chatdata = await chatModel.findOne({ _id: chatId })

        if (!chatdata) {
            res.json({
                status: 404,
                success: false,
                message: "No such task"
            })
        }

        chatdata.isDelete = true

        await chatdata.save()

        res.json({
            status: 200,
            success: true,
            message: "chat removed"
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
    addChatToDB,
    getAllChat,
    getSingleChat,
    updateChat,
    deleteSoft
}