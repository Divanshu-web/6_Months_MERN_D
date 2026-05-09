const customerModel = require("./customerModel")
const userModel = require("../user/userModel")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { uploadImg } = require("../../utilities/helper")

const register = async (req, res) => {
    try {
        let formData = req.body
        let validation = ""
        if (!formData.name) {
            validation += "name is required "
        }
        if (!req.file) {
            validation += " profile is required"
        }
        if (!formData.phone) {
            validation += " phone is required "
        }
        if (!formData.email) {
            validation += " email is required "
        }
        if (!formData.gender) {
            validation += " gender is required "
        }
        if (!formData.address) {
            validation += " address is required "
        }
        if (!formData.password) {
            validation += " password is required "
        }
        if (!!validation) {
            res.send({
                success: false,
                status: 400,
                message: validation
            })
        }
        else {

            let existingEmail = await userModel.findOne({ email: formData.email })
            if (existingEmail) {
                res.send({
                    success: false,
                    status: 400,
                    message: "Email Already Exist"
                })
            }
            else {

                let image = "no_image.jpg";
                try {
                    const imageUrl = await uploadImg(req.file.buffer, `ecom/${Date.now()}`);
                    image = imageUrl;
                } catch (err) {
                    console.error("Image upload failed:", err);
                    return res.json({ success: false, status: 500, message: "Profile upload failed" });
                }



                // Create User
                let totalUsers = await userModel.countDocuments()
                let newUser = new userModel()
                newUser.autoId = totalUsers + 1
                newUser.email = formData.email
                newUser.name = formData.name
                newUser.password = bcrypt.hashSync(formData.password, saltRounds)
                newUser.phone = formData.phone
                newUser.userType = 2
                let savedUser = await newUser.save()
                // console.log(savedUser);
                // Create Customer
                let totalCustomers = await customerModel.countDocuments()
                let newCustomer = new customerModel()
                newCustomer.autoId = totalCustomers + 1
                newCustomer.name = formData.name
                newCustomer.email = formData.email
                newCustomer.phone = formData.phone
                newCustomer.gender = formData.gender
                newCustomer.address = formData.address
                newCustomer.profile = image
                newCustomer.userId = savedUser._id
                let savedCustomer = await newCustomer.save()
                return res.send({
                    success: true,
                    status: 201,
                    message: " User Registered Successfully",
                    date: savedCustomer
                })
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }



}

module.exports = {
    register
}