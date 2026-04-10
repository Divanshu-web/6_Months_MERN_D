const sessionModel = require('./sessionModel')

const addSessionToDB = async (req, res) => {
    try {
        const incomingData = req.body || {};
        let validation = "";
        if (!incomingData.sessionName) validation += 'sessionName is Required';
        if (!incomingData.descryption) validation += 'descryption is Required';
        if (!incomingData.price) validation += 'price is Required';
        if (!req.file) validation += 'thumbnail is Required';
        if (!incomingData.duration) validation += 'price is Required';


        if (!!validation) {
            res.json({
                status: 400,
                success: false,
                message: validation
            })
        }
        else {
            const existingData = await skillModel.findOne({ skillName: incomingData.skillName })
            if (!!existingData) {
                return res.json({
                    status: 400,
                    success: false,
                    message: "skill already exists"
                })
            }

            let totalDocs = await skillModel.countDocuments({});

            const skillData = new skill({
                autoId: totalDocs + 1,
                skillName: incomingData.skillName,
                thumbnail: 'skill/' + req.file.filename,
            })
            await skillData.save();

            res.json({
                status: 201,
                success: true,
                message: "skill Saved",
                data: skillData
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
const getAllSkill = async (req, res) => {
    try {
        const dbData = await skillModel.find({ isDelete: false });// to retrive all the documents
        const totalDocs = await skillModel.countDocuments({ isDelete: false });
        res.json({
            status: 200,
            success: true,
            message: "skill loaded successfully",
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
const getSingleskill = async (req, res) => {
    try {
        const skillId = req.body?._id || {};

        if (!skillId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const skilldata = await skillModel.findOne({ _id: skillId, isDelete: false })

        if (!skilldata) {
            res.json({
                status: 404,
                success: false,
                message: "skill not found"
            })
        } else {
            res.json({
                status: 200,
                success: true,
                message: "skill fetched",
                data: skilldata
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

const updateskill = async (req, res) => {
    try {
        const skillId = req.body?._id;
        const incomingData = req.body;

        if (!skillId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const skillnew = await skillModel.findOne({ _id: skillId, });

        if (!skillnew) {
            res.json({
                status: 404,
                success: false,
                message: "No such skillnew exists"
            })
        } else {
            if (incomingData.skillName) {
                skillnew.skillName = incomingData.skillName
            }
            if (incomingData.status) {
                skillnew.status = incomingData.status
            }
            if (req.file) {
                skillnew.thumbnail = 'thumbnail/' + req.file.filename
            }

            skillnew.updatedAt = Date.now()
            let savedData = await skillnew.save();

            res.json({
                status: 200,
                success: true,
                message: "skillnew Updated",
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
        const skillId = req.body?._id;

        if (!skillId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const skilldata = await skillModel.findOne({ _id: skillId })

        if (!skilldata) {
            res.json({
                status: 404,
                success: false,
                message: "No such task"
            })
        }

        skilldata.isDelete = true

        await skilldata.save()

        res.json({
            status: 200,
            success: true,
            message: "skill removed"
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
    addSkillToDB,
    getAllSkill,
    getSingleskill,
    updateskill,
    deleteSoft
}