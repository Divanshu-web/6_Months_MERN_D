const userModel = require('./userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
                    phone: user.phone,
                    userType: user.userType,
                }

                const token = jwt.sign(payload, process.env.JWT_SECRET)

                res.json({
                    status: 200,
                    success: true,
                    message: "Login Success",
                    token: token,
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