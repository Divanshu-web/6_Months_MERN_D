const userModel = require("./userModel")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const secretKey = process.env.JWT_SECRET

const login = async (req, res) => {
    try {
        let validation = ""
        if (!req.body.email) {
            validation += "email is required "
        }
        if (!req.body.password) {
            validation += "password is required"
        }
        if (!!validation) {
            return res.send({
                success: false,
                status: 400,
                message: validation
            })
        }
        else {

            let user = await userModel.findOne({ email: req.body.email })
            // console.log(user);
            if (!user) {
                return res.send({
                    success: false,
                    status: 404,
                    message: "User not found"
                })
            }
            else {
                let isMatch = bcrypt.compareSync(req.body.password, user.password)
                if (isMatch) {
                    if (user.isBlocked) {
                        return res.send({
                            success: false,
                            status: 400,
                            message: "Your Account is Blocked"
                        })
                    }
                    else if (user.isDeleted) {
                        return res.send({
                            success: false,
                            status: 400,
                            message: "User not found or deleted"
                        })
                    }
                    else if (user.status == false) {
                        return res.send({
                            success: false,
                            status: 400,
                            message: "Your Account is inactive , Please Contact Admin"
                        })
                    }
                    else {
                        let payload = {
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            userType: user.userType,
                            phone: user.phone
                        }
                        let token = jwt.sign(payload, secretKey)
                        return res.send({
                            success: true,
                            status: 200,
                            message: "Login Successfull",
                            token: token,
                            data: user
                        })
                    }
                }
                else {
                    return res.send({
                        success: false,
                        status: 400,
                        message: "Invalid Password"
                    })

                }
            }
        }
    } catch (error) {
        console.log(error);
        res.send({
            status: 500,
            success: false,
            message: error,
        })
    }



}


module.exports = {
    login
}