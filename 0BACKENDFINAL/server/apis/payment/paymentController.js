const paymentModel = require('./paymentModel')

const addPaymentToDB = async (req, res) => {
    try {
        const incomingData = req.body || {};
        let validation = "";
         if (!incomingData.requesttId) validation += 'requesttId is Required';
        if (!incomingData.amount) validation += 'amount is Required';
       
        if (!incomingData.paymentMethod) validation += 'paymentMethod is Required';
        if (!incomingData.paymentStatus) validation += 'paymentStatus is Required';


        if (!!validation) {
            res.json({
                status: 400,
                success: false,
                message: validation
            })
        }

            let totalDocs = await paymentModel.countDocuments({});

            const paymentModel = new payment({
                autoId: totalDocs + 1,
               
                requestId: incomingData.requestId,
                amount: incomingData.amount,
                paymentMethod: incomingData.paymentMethod,
                paymentStatus: incomingData.paymentStatus,
               
            })
            await paymentData.save();

            res.json({
                status: 201,
                success: true,
                message: "payment Saved",
                data: paymentData
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
const getAllPayment = async (req, res) => {
    try {
        const dbData = await paymentModel.find({ isDelete: false }).populate("requestId")// to retrive all the documents
        const totalDocs = await paymentModel.countDocuments({ isDelete: false });
        res.json({
            status: 200,
            success: true,
            message: "payment loaded successfully",
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
const getSinglePayment = async (req, res) => {
    try {
        const paymentId = req.body?._id || {};

        if (!paymentId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const paymentdata = await paymentModel.findOne({ _id: paymentId, isDelete: false })

        if (!paymentdata) {
            res.json({
                status: 404,
                success: false,
                message: "payment not found"
            })
        } else {
            res.json({
                status: 200,
                success: true,
                message: "payment fetched",
                data: paymentdata
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

const updatePayment = async (req, res) => {
    try {
        const paymentId = req.body?._id;
        const incomingData = req.body; 

        if (!paymentId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const paymentnew = await paymentModel.findOne({ _id: paymentId, });

        if (!paymentnew) {
            res.json({
                status: 404,
                success: false,
                message: "No such paymentnew exists"
            })
        } else {
            if (incomingData.percentage) {
                paymentnew.percentage = incomingData.percentage
            }
            if (incomingData.remarks) {
                paymentnew.remarks = incomingData.remarks
            }

            paymentnew.updatedAt = Date.now()
            let savedData = await paymentnew.save();

            res.json({
                status: 200,
                success: true,
                message: "paymentnew Updated",
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
        const paymentId = req.body?._id;

        if (!paymentId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const paymentdata = await paymentModel.findOne({ _id: paymentId })

        if (!paymentdata) {
            res.json({
                status: 404,
                success: false,
                message: "No such task"
            })
        }

        paymentdata.isDelete = true

        await paymentdata.save()

        res.json({
            status: 200,
            success: true,
            message: "payment removed"
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
    addPaymentToDB,
    getAllPayment,
    getSinglePayment,
    updatePayment,
    deleteSoft
}