const user = require('../models/userModel')

// TO CREATE A MOVIE
// const addUserToDB = async (req, res) => {
//   try {
//     const incomingData = req.body || {};
//     const { name } = incomingData;
//     const { email } = incomingData;
//     const { profileImage } = incomingData;
//     const { chats } = incomingData;
//     const { userType } = incomingData;


//     const totalDocs = await user.countDocuments({});

//     const userData = new user({
//       autoId: totalDocs + 1,
//       name,
//       email,
//       profileImage,
//       chats,
//       userType
//     });

//     await userData.save()

//     res.json({
//       status: 201,
//       success: true,
//       message: "user Created",
//       data: userData
//     })

//   } catch (err) {
//     res.json({
//       status: 500,
//       success: false,
//       message: err.message || "Internal Server Error"
//     })
//   }
// }

const addUserToDB = async (req, res) => {
    try {
        const incomingData = req.body || {};
        let validation = "";
        if (!incomingData.name) validation += 'name is Required';
        if (!incomingData.email) validation += 'email is Required';
        if (!incomingData.password) validation += 'password is Required';
        if (!!validation) {
            res.json({
                status: 400,
                success: false,
                message: validation
            })
        }
        else {
            const existingData = await user.findOne({ name: incomingData.name })
            if (!!existingData) {
                return res.json({
                    status: 400,
                    success: false,
                    message: "user already exists"
                })
            }
            const userData = new user({
                name: incomingData.name,
                email: incomingData.email,
                password: incomingData.password,
            })
            await userData.save();

            res.json({
                status: 201,
                success: true,
                message: "user Saved",
                data: userData
            })
        }
    } catch (err) {
        return res.json({
            status: 500,
            success: false,
            message: "Internal Server Error: " + err.message
        })
    }
}


// // TO GET ALL MOVIES

// const getAllUser = async (req, res) => {
//   const dbData = await user.find({isDelete: false});
//   const totalDocs = await user.countDocuments({isDelete: false});
//   res.json({
//     status: 200,
//     total: totalDocs,
//     success: true,
//     message: "user fetched",
//     data: dbData
//   })
// }

// READ OPERATION



// To GET ALL DOCUMENTS
const getAllUser = async (req, res) => {
    try {
        const dbData = await user.find({isDelete : false});// to retrive all the documents
        const totalDocs = await user.countDocuments({isDelete: false});
        res.json({
            status: 200,
            success: true,
            message: "Products loaded successfully",
            total: totalDocs,
            data: dbData
        })
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "Internal Server Error: " + err,
        })
    }
}

// // TO GET SINGLE MOVIE
// const getSingleUser = async (req, res) => {
//   const userId = req.params.id;
//   const users = await user.find({ _id: userId , isDelete: false});

//   res.json({
//     status: 200,
//     success: true,
//     message: "user fetched",
//     data: users
//   })
// }

const getSingleUser = async (req, res) => {
    try {
        const userId = req.body?._id || { }  ;

        if (!userId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const userdata = await user.findOne({ _id: userId, isDelete :false })

        if (!userdata) {
            res.json({
                status: 404,
                success: false,
                message: "user not found"
            })
        } else {
            res.json({
                status: 200,
                success: true,
                message: "user fetched",
                data: userdata
            })
        }
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "Internal Server Error: " + err,
        })
    }
}


// // UPDATE
// const updateUser = async (req, res) => {
//   const userId = req.params.id;
//   const incomingData = req.body;
//   const updatedUser = await user.findByIdAndUpdate(userId, incomingData, { new: true });

//   res.json({
//     success: true,
//     message: "Data Updated",
//     data: updatedUser
//   })
// }


// const updateUser = async (req, res) => {
//     try {
//         const userId = req.body?._id;
//         const incomingData = req.body;

//         if (!userId) {
//             res.json({
//                 status: 400,
//                 success: false,
//                 message: "_id is required"
//             })
//         }

//         const usernew = await user.findOne({ _id: userId });

//         if (!usernew) {
//             res.json({
//                 status: 404,
//                 success: false,
//                 message: "No such user exists"
//             })
//         } else {
//             if (incomingData.name) {
//                 user.name = incomingData.name
//             }
//             if (incomingData.email) {
//                 user.email = incomingData.email
//             }
//             if (incomingData.password) {
//                 user.password = incomingData.password
//             }

//             usernew.updatedAt = Date.now()
//             let savedData = await usernew.save();

//             res.json({
//                 status: 200,
//                 success: true,
//                 message: "user Updated",
//                 data: savedData
//             })

//         }
//     } catch (err) {
//         res.json({
//             status: 500,
//             success: false,
//             message: "ISE: " + err.message
//         })
//     }
// }

const updateUser = async (req, res) => {
    try {
        const userId = req.body?._id;
        const incomingData = req.body;

        if (!userId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const usernew = await user.findOne({ _id: userId ,});

        if (!usernew) {
            res.json({
                status: 404,
                success: false,
                message: "No such usernew exists"
            })
        } else {
            if (incomingData.name) {
                usernew.name = incomingData.name
            }
            if (incomingData.email) {
                usernew.email = incomingData.email
            }
            if (incomingData.password) {
                usernew.password = incomingData.password
            }

            usernew.updatedAt = Date.now()
            let savedData = await usernew.save();

            res.json({
                status: 200,
                success: true,
                message: "usernew Updated",
                data: savedData
            })

        }
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "ISE: " + err.message
        })
    }
}


// DELETE - 
// SOFT DELETE
// const deleteSoft = async (req, res) => {
//    try {
//     const userId = req.body.id;

//     if(!userId){
//        return res.json({
//         status: 400,
//         success: false,
//         message: "user id is required"
//       })
//     }

//     const deleteUser = await user.findByIdAndUpdate(userId, {isDelete : true}, { new: true });

//     if(!deleteUser){
//       return res.json({
//         status: 400,
//         success: false,
//         message: "user not found"
//       })
//     }

//     res.json({
//       status: 200,
//       success: true,
//       message: "user deleted successfully",
//       data: deleteUser
//     })


//   } catch (err) {
//     return res.json({
//       status: 500,
//       success: false,
//       message: err.message || "Internal Server Error"
//     })
//   }
// }


// const deleteSoft = async (req, res) => {
//     try {
//         const userId = req.body?._id;

//         if (!userId) {
//             res.json({
//                 status: 400,
//                 success: false,
//                 message: "_id is required"
//             })
//         }

//         const user = await user.findOne({ _id: userId })

//         if (!user) {
//             res.json({
//                 status: 404,
//                 success: false,
//                 message: "No such user"
//             })
//         }

//         user.isDelete = true

//         await user.save()

//         res.json({
//             status: 200,
//             success: true,
//             message: "user removed"
//         })

//     } catch (err) {
//         res.json({
//             status: 500,
//             success: false,
//             message: "ISE: " + err.message
//         })
//     }

// }

const deleteSoft = async (req, res) => {
    try {
        const userId = req.body?._id;

        if (!userId) {
            res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const userdata = await user.findOne({ _id: userId })

        if (!userdata) {
            res.json({
                status: 404,
                success: false,
                message: "No such task"
            })
        }

        userdata.isDelete = true

        await userdata.save()

        res.json({
            status: 200,
            success: true,
            message: "user removed"
        })

    } catch (err) {
        res.json({
            status: 500,
            success: false, 
            message: "ISE: " + err.message
        })
    }

}

module.exports = {
  getAllUser,
  addUserToDB,
  getSingleUser,
  updateUser,
  deleteSoft
}