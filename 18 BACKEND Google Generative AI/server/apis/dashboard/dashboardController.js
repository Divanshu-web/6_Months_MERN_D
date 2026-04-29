const Product = require("../product/productMode")
const Category = require("../category/categoryModel")
const Customer = require("../cutomer/customerModel")


const adminDashboard = async (req, res) => {
    let totalProducts = await Product.countDocuments({ isDeleted: false })
    let totalCategories = await Category.countDocuments({ isDeleted: false })
    let totalCustomers = await Customer.countDocuments({ isDeleted: false })

    res.send({
        status: 200,
        success: true,
        message: "Dashboard Data Loaded",
        totalProducts: totalProducts,
        totalCategories: totalCategories,
        totalCustomers: totalCustomers
    })



}


module.exports = {
    adminDashboard
}