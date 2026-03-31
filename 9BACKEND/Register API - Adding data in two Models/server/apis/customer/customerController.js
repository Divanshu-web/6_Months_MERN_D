const customerModel = require('./customerModel')
const userModel = require('../user/userModel')
const bcrypt = require('bcrypt')
const saltRounds = 10;

const register = async (req, res) => {
    try {
        const incomingData = req.body || {};
        let validation = ""

        if (!incomingData.email) validation += 'email is required'
        if (!incomingData.name) validation += 'name is required'
        // if (!incomingData.password) validation += 'password is required'
        if (!incomingData.phone) validation += 'phone is required'
        if (!incomingData.address) validation += 'address is required'

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

            let data = new userModel({
                name: incomingData.name,
                email: incomingData.email,
                phone: incomingData.phone,
                userType: 2,
                password: bcrypt.hashSync(incomingData.password, saltRounds)
            })

            let savedUser = await data.save();

             let customerData = new customerModel({
                name: incomingData.name,
                email: incomingData.email,
                phone: incomingData.phone,
                address: incomingData.address,
                userId : savedUser._id
            })

            let savedCustomer = await customerData.save();

            res.json({
                status: 201,
                success: true,
                message: "Registered",
                data: savedCustomer
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


module.exports = {
    register
}