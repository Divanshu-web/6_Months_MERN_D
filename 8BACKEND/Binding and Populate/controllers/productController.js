const products = require('../models/productModel')

// TO CREATE A MOVIE
const addProductToDB = async (req, res) => {
  try {
    const incomingData = req.body || {};
    const { name, price, stock, description, categoryId } = incomingData;
    const totalDocs = await products.countDocuments({});

    const productdata = new products({
      autoId: totalDocs + 1,
      name,
      price,
      stock,
      description,
      categoryId,
    });

    await productdata.save()

    res.json({
      status: 201,
      success: true,
      message: "Product Created",
      data: productdata
    })

  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: err.message || "Internal Server Error"
    })
  }
}

// TO GET ALL MOVIES
const getAllProducts = async (req, res) => {
  const dbData = await products.find({isDelete: false}).populate('categoryId');
  const totalDocs = await products.countDocuments({isDelete: false});
  res.json({
    status: 200,
    total: totalDocs,
    success: true,
    message: "Products fetched",
    data: dbData
  })
}


// TO GET SINGLE MOVIE
const getSingleProduct = async (req, res) => {
  const productId = req.params.id;
  const product = await products.find({ _id: productId , isDelete: false}).populate('categoryId');

  res.json({
    status: 200,
    success: true,
    message: "product fetched",
    data: product
  })
}


// UPDATE
const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const incomingData = req.body;
  const updatedProduct = await products.findByIdAndUpdate(productId, incomingData, { new: true });

  res.json({
    success: true,
    message: "Data Updated",
    data: updatedProduct
  })
}


// DELETE - 
// HARD DELETE

// const deleteProduct = async (req, res) => {
//   try {
//     const productId = req.body.id;

//     if(!productId){
//        return res.json({
//         status: 400,
//         success: false,
//         message: "prod id is required"
//       })
//     }

//     const deleteProduct = await products.findByIdAndDelete(productId);

//     if(!deleteProduct){
//       return res.json({
//         status: 400,
//         success: false,
//         message: "Product not found"
//       })
//     }

//     res.json({
//       status: 200,
//       success: true,
//       message: "User deleted successfully",
//       data: deleteProduct
//     })


//   } catch (err) {
//     return res.json({
//       status: 500,
//       success: false,
//       message: err.message || "Internal Server Error"
//     })
//   }
// }


// SOFT DELETE
const deleteSoft = async (req, res) => {
   try {
    const productId = req.body.id;

    if(!productId){
       return res.json({
        status: 400,
        success: false,
        message: "prod id is required"
      })
    }

    const deleteProduct = await products.findByIdAndUpdate(productId, {isDelete : true}, { new: true });

    if(!deleteProduct){
      return res.json({
        status: 400,
        success: false,
        message: "Product not found"
      })
    }

    res.json({
      status: 200,
      success: true,
      message: "Product deleted successfully",
      data: deleteProduct
    })

  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err.message || "Internal Server Error"
    })
  }
}

module.exports = {
  getAllProducts,
  addProductToDB,
  getSingleProduct,
  updateProduct,
  deleteSoft
}