const userModel = require('./userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const LearnerMentor = require('../learnerMentor/learnerMentorModel')
const learnerMentorModel = require('../learnerMentor/learnerMentorModel')

const login = async (req, res) => {
    try {
        const incomingData = req.body || {};
        let validation = ""

        if (!incomingData.email) {
            validation += 'email is required'
        }
        if (!incomingData.password) {
            validation += 'password is required'
        }

        if (!!validation) {
            res.json({
                status: 400,
                success: false,
                message: "Validation Error: ", validation
            })
        }

        let user = await userModel.findOne({ email: incomingData.email });

        if (!user) {
            res.json({
                status: 404,
                success: false,
                message: "User not found"
            })
        } else {

            let isMatch = bcrypt.compareSync(incomingData.password, user.password)

            if (isMatch) {

                let payload = {
                    _id: user._id,
                    email: user.email,
                    name: user.name,
                    contact: user.contact,
                    userType: user.userType,
                }

                const token = jwt.sign(payload, process.env.JWT_SECRET)

                let learnerMentorId = null; 

                if (user.userType == 2) {
                    const learnerMentorData = await LearnerMentor.findOne({ userId: user._id });
                    learnerMentorId = learnerMentorData?._id;
                }

                res.json({
                    status: 200,
                    success: true,
                    token: token,
                    message: "Login Success",
                    learnerMentorId: learnerMentorId,
                    data: user
                })
            } else {
                res.json({
                    status: 200,
                    success: false,
                    message: "Wrong Password",
                })
            }
        }
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: err.message
        })
    }
}

module.exports = { login }