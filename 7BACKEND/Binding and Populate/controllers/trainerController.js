const trainer = require('../models/trainerModel')

// TO CREATE A MOVIE
const addTrainerToDB = async (req, res) => {
  try {
    const incomingData = req.body || {};
    const { name } = incomingData;
    const { email } = incomingData;
    const { profileImage } = incomingData;
    const { chats } = incomingData;
    const { userId } = incomingData;
    const { skills } = incomingData;
    const { experience } = incomingData;


    const totalDocs = await trainer.countDocuments({});

    const trainerData = new trainer({
      autoId: totalDocs + 1,
      name,
      email,
      profileImage,
      chats,
      userId, 
      skills, 
      experience 
    });

    await trainerData.save()

    res.json({
      status: 201,
      success: true,
      message: "trainer Created",
      data: trainerData
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
const getAllTrainer = async (req, res) => {
  const dbData = await trainer.find({isDelete: false}).populate("userId");
  const totalDocs = await trainer.countDocuments({isDelete: false});
  res.json({
    status: 200,
    total: totalDocs,
    success: true,
    message: "trainer fetched",
    data: dbData
  })
}


// TO GET SINGLE MOVIE
const getSingleTrainer = async (req, res) => {
  const trainerId = req.params.id;
  const trainers = await trainer.find({ _id: trainerId , isDelete: false});

  res.json({
    status: 200,
    success: true,
    message: "trainer fetched",
    data: trainers
  })
}


// UPDATE
const updateTrainer = async (req, res) => {
  const trainerId = req.params.id;
  const incomingData = req.body;
  const updatedTrainer = await trainer.findByIdAndUpdate(trainerId, incomingData, { new: true });

  res.json({
    success: true,
    message: "Data Updated",
    data: updatedTrainer
  })
}


// DELETE - 
// SOFT DELETE
const deleteSoft = async (req, res) => {
   try {
    const trainerId = req.body.id;

    if(!trainerId){
       return res.json({
        status: 400,
        success: false,
        message: "trainer id is required"
      })
    }

    const deleteTrainer = await trainer.findByIdAndUpdate(trainerId, {isDelete : true}, { new: true });

    if(!deleteTrainer){
      return res.json({
        status: 400,
        success: false,
        message: "trainer not found"
      })
    }

    res.json({
      status: 200,
      success: true,
      message: "trainer deleted successfully",
      data: deleteTrainer
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
  getAllTrainer,
  addTrainerToDB,
  getSingleTrainer,
  updateTrainer,
  deleteSoft
}