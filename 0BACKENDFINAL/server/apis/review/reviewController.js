const reviewModel = require('./reviewModel')

const addReviewToDB = async (req, res) => {
    try {
        const incomingData = req.body || {};
        let validation = "";
        if (!incomingData.mentorId) validation += 'mentorId is Required';
        if (!incomingData.requesttId) validation += 'requesttId is Required';
        if (!incomingData.learnerId) validation += 'learnerId is Required';
        if (!incomingData.rating) validation += 'rating is Required';
        if (!incomingData.comment) validation += 'comment is Required';


        if (!!validation) {
            res.json({
                status: 400,
                success: false,
                message: validation
            })
        }

            let totalDocs = await reviewModel.countDocuments({});

            const reviewData = new review({
                autoId: totalDocs + 1,
                mentorId: incomingData.mentorId,
                requestId: incomingData.requestId,
                learnerId: incomingData.learnerId,
                rating: incomingData.rating,
                comment: incomingData.comment,
               
            })
            await reviewData.save();

            res.json({
                status: 201,
                success: true,
                message: "review Saved",
                data: reviewData
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
const getAllReview = async (req, res) => {
    try {
        const dbData = await reviewModel.find({ isDelete: false }).populate("requestId").populate("learnerId").populate("mentorId");// to retrive all the documents
        const totalDocs = await reviewModel.countDocuments({ isDelete: false });
        res.json({
            status: 200,
            success: true,
            message: "review loaded successfully",
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
const getSingleReview = async (req, res) => {
    try {
        const reviewId = req.body?._id || {};

        if (!reviewId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const reviewdata = await reviewModel.findOne({ _id: reviewId, isDelete: false })

        if (!reviewdata) {
            res.json({
                status: 404,
                success: false,
                message: "review not found"
            })
        } else {
            res.json({
                status: 200,
                success: true,
                message: "review fetched",
                data: reviewdata
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

const updateReview = async (req, res) => {
    try {
        const reviewId = req.body?._id;
        const incomingData = req.body; 

        if (!reviewId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const reviewnew = await reviewModel.findOne({ _id: reviewId, });

        if (!reviewnew) {
            res.json({
                status: 404,
                success: false,
                message: "No such reviewnew exists"
            })
        } else {
            if (incomingData.percentage) {
                reviewnew.percentage = incomingData.percentage
            }
            if (incomingData.remarks) {
                reviewnew.remarks = incomingData.remarks
            }

            reviewnew.updatedAt = Date.now()
            let savedData = await reviewnew.save();

            res.json({
                status: 200,
                success: true,
                message: "reviewnew Updated",
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
        const reviewId = req.body?._id;

        if (!reviewId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const reviewdata = await reviewModel.findOne({ _id: reviewId })

        if (!reviewdata) {
            res.json({
                status: 404,
                success: false,
                message: "No such task"
            })
        }

        reviewdata.isDelete = true

        await reviewdata.save()

        res.json({
            status: 200,
            success: true,
            message: "review removed"
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
    addReviewToDB,
    getAllReview,
    getSingleReview,
    updateReview,
    deleteSoft
}