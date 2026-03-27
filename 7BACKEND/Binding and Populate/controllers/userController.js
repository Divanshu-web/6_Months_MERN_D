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
        if (!incomingData.profileImage) validation += 'profileImage is Required';
        if (!incomingData.chats) validation += 'chats is Required';
        if (!incomingData.userType) validation += 'userType is Required';
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
                profileImage: incomingData.profileImage,
                chats: incomingData.chats,
                userType: incomingData.userType,
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


// TO GET ALL MOVIES
const getAllUser = async (req, res) => {
  const dbData = await user.find({isDelete: false});
  const totalDocs = await user.countDocuments({isDelete: false});
  res.json({
    status: 200,
    total: totalDocs,
    success: true,
    message: "user fetched",
    data: dbData
  })
}


// TO GET SINGLE MOVIE
const getSingleUser = async (req, res) => {
  const userId = req.params.id;
  const users = await user.find({ _id: userId , isDelete: false});

  res.json({
    status: 200,
    success: true,
    message: "user fetched",
    data: users
  })
}


// UPDATE
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const incomingData = req.body;
  const updatedUser = await user.findByIdAndUpdate(userId, incomingData, { new: true });

  res.json({
    success: true,
    message: "Data Updated",
    data: updatedUser
  })
}


// DELETE - 
// SOFT DELETE
const deleteSoft = async (req, res) => {
   try {
    const userId = req.body.id;

    if(!userId){
       return res.json({
        status: 400,
        success: false,
        message: "user id is required"
      })
    }

    const deleteUser = await user.findByIdAndUpdate(userId, {isDelete : true}, { new: true });

    if(!deleteUser){
      return res.json({
        status: 400,
        success: false,
        message: "user not found"
      })
    }

    res.json({
      status: 200,
      success: true,
      message: "user deleted successfully",
      data: deleteUser
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
  getAllUser,
  addUserToDB,
  getSingleUser,
  updateUser,
  deleteSoft
}