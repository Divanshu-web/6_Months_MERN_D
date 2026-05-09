const Razorpay = require('razorpay')

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
})

const createOrder = async (req, res) => {
    try {
        let formData = req.body || {}

        if (!formData.amount) {
            res.json({
                status: 400,
                success: false,
                message: "Amout is req"
            })
        }

        let options = {
            amount: formData.amount * 100,  // in paisa
            currency: "INR"
        }

        const order = await razorpay.orders.create(options);

        res.json({
            status: 200,
            success: true,
            order
        })

    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: err
        })
    }
}

module.exports = {createOrder}