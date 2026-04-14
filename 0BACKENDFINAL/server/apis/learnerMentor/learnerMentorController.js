const learnerMentorModel = require('./learnerMentorModel')
const userModel = require('../user/userModel')
const bcrypt = require('bcrypt')
const saltRounds = 10;

const register = async (req, res) => {
    try {
        const incomingData = req.body || {};
        let validation = ""

        if (!incomingData.email) validation += 'email is required'
        if (!incomingData.name) validation += 'name is required'
        if (!incomingData.password) validation += 'password is required'
        if (!incomingData.contact) validation += 'contact is required'
        if (!incomingData.profession) validation += 'profession is required'
        if (!incomingData.skills) validation += 'skills is required'
        if (!incomingData.experience) validation += 'experience is required'
        if (!req.file) validation += 'profileImage is required'

        if (!!validation) {
            return res.json({
                status: 400,
                success: false,
                message: "Validation Error: ", validation
            })
        }else{
            let existingData = await userModel.findOne({email: incomingData.email})

            if(existingData){
                return res.json({
                status: 400,
                success: false,
                message: "User already exists"
            })
            }

            let totalDocs = await userModel.countDocuments({});
            // console.log("total: ", totalDocs)

            let data = new userModel({
                autoId: totalDocs + 1,
                name: incomingData.name,
                email: incomingData.email,
                contact: incomingData.contact,
                userType: 2,
                password: bcrypt.hashSync(incomingData.password, saltRounds)
            })

            let savedUser = await data.save();

             let totalDocsLM = await learnerMentorModel.countDocuments({});

             let learnerMentorData = new learnerMentorModel({
                autoId: totalDocsLM + 1,
                userId : savedUser._id,
                contact: incomingData.contact,
                profession: incomingData.profession,
                skills: incomingData.skills,
                experience: incomingData.experience,
                profileImage: 'learnerMentor/' + req.file.filename,
            })

            let savedLearnerMentor = await learnerMentorData.save();

            res.json({
                status: 201,
                success: true,
                message: "Registered",
                data: savedLearnerMentor
            })
        }

    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "Internal Server Error" + err.message
        })
    }
}

// READ OPERATION

// To GET ALL DOCUMENTS
const getAllLearnerMentor = async (req, res) => {
    try {
        const dbData = await learnerMentorModel.find({isDelete : false}).populate("userId");// to retrive all the documents
        const totalDocs = await learnerMentorModel.countDocuments({isDelete: false});
        res.json({
            status: 200,
            success: true,
            message: "Products loaded successfully",
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

const getSingleLearnerMentor = async (req, res) => {
    try {
        const learnerMentorId = req.body?._id || { }  ;

        if (!learnerMentorId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const learnerMentor = await learnerMentorModel.findOne({ _id: learnerMentorId, isDelete :false })

        if (!learnerMentor) {
            res.json({
                status: 404,
                success: false,
                message: "learnerMentor not found"
            })
        } else {
            res.json({
                status: 200,
                success: true,
                message: "learnerMentor fetched",
                data: learnerMentor
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


// // UPDATE

const updateLearnerMentor = async (req, res) => {
    try {
        const learnerMentorId = req.body?._id;
        const incomingData = req.body;

        if (!learnerMentorId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const learnerMentornew = await learnerMentorModel.findOne({ _id: learnerMentorId ,});

        if (!learnerMentornew) {
            res.json({
                status: 404,
                success: false,
                message: "No such learnerMentornew exists"
            })
        } else {
            if (incomingData.contact) {
                learnerMentornew.contact = incomingData.contact
            }
            if (incomingData.profession) {
                learnerMentornew.profession = incomingData.profession
            }
            if (incomingData.skills) {
                learnerMentornew.skills = incomingData.skills
            }
            if (incomingData.experience) {
                learnerMentornew.experience = incomingData.experience
            }
            if (incomingData.profileImage) {
                learnerMentornew.profileImage = incomingData.profileImage
            }

            learnerMentornew.updatedAt = Date.now()
            let savedData = await learnerMentornew.save();

            res.json({
                status: 200,
                success: true,
                message: "learnerMentornew Updated",
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
        const learnerMentorId = req.body?._id;

        if (!learnerMentorId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const learnerMentordata = await learnerMentorModel.findOne({ _id: learnerMentorId })

        if (!learnerMentordata) {
            res.json({
                status: 404,
                success: false,
                message: "No such task"
            })
        }

        learnerMentordata.isDelete = true

        await learnerMentordata.save()

        res.json({
            status: 200,
            success: true,
            message: "learnerMentor removed"
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
  register,
  getAllLearnerMentor,
  getSingleLearnerMentor,
  updateLearnerMentor,
  deleteSoft
}