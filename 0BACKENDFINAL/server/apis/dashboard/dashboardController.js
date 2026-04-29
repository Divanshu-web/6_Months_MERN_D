// const customerModel = require("../cutomer/customerModel");
// const productMode = require("../product/productMode");

// const dashboard = async (req, res) => {

//     // const totalOrders = await orderModel.countDocuments({isDelete: false}); - 1s
//     // const totalCustomers = await customerModel.countDocuments({isDelete: false}); - 1s
//     // const totalProducts = await productMode.countDocuments({isDelete: false}); - 1s

//     const [
//         totalOrders,
//         totalCustomers,
//         totalProducts
//     ] =
//         await Promise.all[
//         orderModel.countDocuments({ isDelete: false }),
//         customerModel.countDocuments({ isDelete: false }),
//         productMode.countDocuments({ isDelete: false })
//         ]

//     res.json({
//         success: true,
//         status: 200,
//         message: "Stats Loaded",
//         data: {
//             totalOrders,
//             totalCustomers,
//             totalProducts
//         }
//     }
//     )
// }


// module.exports = { dashboard }