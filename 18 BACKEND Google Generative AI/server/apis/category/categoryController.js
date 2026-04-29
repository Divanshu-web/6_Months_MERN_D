const categoryModel = require("./categoryModel")
const { uploadImg } = require("../../utilities/helper")

const add = async (req, res) => {
    // console.log(req.file);


    let validation = ""
    if (!req.body.name) {
        validation += "name is required "
    }
    if (!req.file) {
        validation += " image is required"
    }
    if (!!validation) {
        return res.send({
            success: false,
            status: 400,
            message: validation
        })
    }
    else {
        let existingCategory = await categoryModel.findOne({ name: req.body.name, isDeleted: false })
        // console.log(existingCategory);
        if (existingCategory) {
            return res.send({
                success: false,
                status: 400,
                message: "Category Already Exist"
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

            let totalCategories = await categoryModel.countDocuments()
            // console.log(totalCategories);
            let newCategory = new categoryModel()
            newCategory.autoId = totalCategories + 1
            newCategory.name = req.body.name
            newCategory.image = image
            newCategory.description = req.body.description
            // console.log();
            if (req.decoded.addedById) {
                newCategory.addedById = req.decoded.addedById
            }

            newCategory.save().then((savedCategory) => {
                res.send({
                    status: 201,
                    success: true,
                    message: "Category Added",
                    data: savedCategory
                })
            }).catch((err) => {
                console.log(err);
                res.send({
                    status: 500,
                    success: false,
                    message: err,
                })
            })
        }
    }

}

const all = async (req, res) => {
    try {
        let formData = req.body || {}
        let skip = 0
        let limit = 10000000
        formData.isDeleted = false
        if (formData.startPoint !== undefined) {
            skip = parseInt(formData.startPoint) || 0
            delete formData.startPoint
        }
        if (formData.limit !==undefined) {
            limit = parseInt(formData.limit) || 1000000;
            delete formData.limit
        }
        let filter = { ...formData }
        let categories = await categoryModel.find(filter).skip(skip).limit(limit)
        let total = await categoryModel.countDocuments(filter)
        res.send({
            status: 200,
            success: true,
            data: categories,
            message: "All Categories Loaded",
            total: total
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}


const single = async (req, res) => {
    if (!req.body._id) {
        return res.send({
            success: false,
            status: 400,
            message: "_id is required"
        })
    }
    else {
        let category = await categoryModel.findOne({ _id: req.body._id })
        if (!category) {
            res.send({
                success: false,
                status: 404,
                message: "Category Not Found"
            })
        }
        else {
            res.send({
                success: true,
                status: 200,
                message: "Category Loaded Successfully",
                data: category
            })
        }
    }
}


// const update = async (req, res) => {
//     try {
//         if (!req.body._id) {
//             return res.send({
//                 success: false,
//                 status: 400,
//                 message: "_id is required"
//             })
//         }
//         else {
//             let category = await categoryModel.findOne({ _id: req.body._id })
//             if (!category) {
//                 res.send({
//                     success: false,
//                     status: 404,
//                     message: "Category Not Found"
//                 })
//             }
//             else {
//                 let updatedCategory = await categoryModel.updateOne({
//                     _id: req.body._id,
//                     name: req.body.name
//                 })
//                 res.send({
//                     success: true,
//                     status: 200,
//                     message: 'Category Updated',
//                     data: updatedCategory
//                 })
//             }
//         }
//     }
//     catch (err) {
//         console.log(err);
//         res.send({
//             success: false,
//             status: 500,
//             message: err.message
//         })

//     }
// }



const update = async (req, res) => {
    try {
        if (!req.body._id) {
            return res.send({
                success: false,
                status: 400,
                message: "_id is required"
            })
        }
        else {
            let category = await categoryModel.findOne({ _id: req.body._id })
            if (!category) {
                res.send({
                    success: false,
                    status: 404,
                    message: "Category Not Found"
                })
            }
            else {
                if (req.body.name) {
                    category.name = req.body.name
                }
                if (req.file) {


                    let image = "no_image.jpg";
                    try {
                        const imageUrl = await uploadImg(req.file.buffer, `ecom/${Date.now()}`);
                        image = imageUrl;
                    } catch (err) {
                        console.error("Image upload failed:", err);
                        return res.json({ success: false, status: 500, message: "Profile upload failed" });
                    }
                    category.image = imageUrl
                }
                if (req.decoded.updatedById) {
                    category.updatedById = req.decoded.updatedById
                }
                category.updatedAt = Date.now()
                let updatedCategory = await category.save()
                res.send({
                    success: true,
                    status: 200,
                    message: "Category Updated",
                    data: updatedCategory
                })
            }
        }
    }
    catch (err) {
        console.log(err);
        res.send({
            success: false,
            status: 500,
            message: err.message
        })

    }
}


const hardDelete = async (req, res) => {
    try {
        const categoryId = req.body._id;
        if (!categoryId) {
            return res.send({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        let category = await categoryModel.findOne({ _id: categoryId });

        if (!category) {
            res.json({
                status: 404,
                success: false,
                message: "Category Not found"
            })
        } else {
            await categoryModel.deleteOne({ _id: categoryId });



            res.json({
                status: 200,
                success: true,
                message: "category deleted"
            })
        }


    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: err.mesage
        })
    }
}


const softDelete = async (req, res) => {
    try {
        const categoryId = req.body._id;
        if (!categoryId) {
            return res.send({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        let category = await categoryModel.findOne({ _id: categoryId });

        if (!category) {
            res.json({
                status: 404,
                success: false,
                message: "Category Not found"
            })
        }

        else {
            category.isDeleted = true;
            if (req.decoded.updatedById) {
                category.updatedById = req.decoded.updatedById
            }
            category.updatedAt = Date.now()
            await category.save();

            res.json({
                status: 200,
                success: true,
                message: "category removed"
            })
        }

    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "Internal ERRROR" + err
        })
    }

}


module.exports = {
    add, all, single, update, hardDelete, softDelete
}