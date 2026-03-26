const categories = require('../models/categoryModel')

// TO CREATE A MOVIE
const addCategoryToDB = async (req, res) => {
  try {
    const incomingData = req.body || {};
    const { name } = incomingData;
    const totalDocs = await categories.countDocuments({});

    const categoryData = new categories({
      autoId: totalDocs + 1,
      name,
    });

    await categoryData.save()

    res.json({
      status: 201,
      success: true,
      message: "Category Created",
      data: categoryData
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
const getAllCategory = async (req, res) => {
  const dbData = await categories.find({isDelete: false});
  const totalDocs = await categories.countDocuments({isDelete: false});
  res.json({
    status: 200,
    total: totalDocs,
    success: true,
    message: "Category fetched",
    data: dbData
  })
}


// TO GET SINGLE MOVIE
const getSingleCategory = async (req, res) => {
  const categoryId = req.params.id;
  const category = await categories.find({ _id: categoryId , isDelete: false});

  res.json({
    status: 200,
    success: true,
    message: "category fetched",
    data: category
  })
}


// UPDATE
const updateCategory = async (req, res) => {
  const categoryId = req.params.id;
  const incomingData = req.body;
  const updatedCategory = await categories.findByIdAndUpdate(categoryId, incomingData, { new: true });

  res.json({
    success: true,
    message: "Data Updated",
    data: updatedCategory
  })
}


// DELETE - 
// SOFT DELETE
const deleteSoft = async (req, res) => {
   try {
    const categoryId = req.body.id;

    if(!categoryId){
       return res.json({
        status: 400,
        success: false,
        message: "Category id is required"
      })
    }

    const deleteCategory = await categories.findByIdAndUpdate(categoryId, {isDelete : true}, { new: true });

    if(!deleteCategory){
      return res.json({
        status: 400,
        success: false,
        message: "Category not found"
      })
    }

    res.json({
      status: 200,
      success: true,
      message: "Category deleted successfully",
      data: deleteCategory
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
  getAllCategory,
  addCategoryToDB,
  getSingleCategory,
  updateCategory,
  deleteSoft
}