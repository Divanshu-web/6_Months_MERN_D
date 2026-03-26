const chat = require('../models/chatModel')

// TO CREATE A MOVIE
const addChatToDB = async (req, res) => {
  try {
    const incomingData = req.body || {};
    const { user } = incomingData;
    const { trainer } = incomingData;
    const { chat } = incomingData;


    const totalDocs = await chat.countDocuments({});

    const chatData = new chat({
      autoId: totalDocs + 1,
      user,
      trainer,
      chat 
    });

    await chatData.save()

    res.json({
      status: 201,
      success: true,
      message: "chat Created",
      data: chatData
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
const getAllChat = async (req, res) => {
  const dbData = await chat.find({isDelete: false});
  const totalDocs = await chat.countDocuments({isDelete: false});
  res.json({
    status: 200,
    total: totalDocs,
    success: true,
    message: "chat fetched",
    data: dbData
  })
}


// TO GET SINGLE MOVIE
const getSingleChat = async (req, res) => {
  const chatId = req.params.id;
  const chats = await chat.find({ _id: chatId , isDelete: false});

  res.json({
    status: 200,
    success: true,
    message: "chat fetched",
    data: chats
  })
}


// UPDATE
const updateChat = async (req, res) => {
  const chatId = req.params.id;
  const incomingData = req.body;
  const updatedChat = await chat.findByIdAndUpdate(chatId, incomingData, { new: true });

  res.json({
    success: true,
    message: "Data Updated",
    data: updatedChat
  })
}


// DELETE - 
// SOFT DELETE
const deleteSoft = async (req, res) => {
   try {
    const chatId = req.body.id;

    if(!chatId){
       return res.json({
        status: 400,
        success: false,
        message: "chat id is required"
      })
    }

    const deleteChat = await chat.findByIdAndUpdate(chatId, {isDelete : true}, { new: true });

    if(!deleteChat){
      return res.json({
        status: 400,
        success: false,
        message: "chat not found"
      })
    }

    res.json({
      status: 200,
      success: true,
      message: "chat deleted successfully",
      data: deleteChat
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
  getAllChat,
  addChatToDB,
  getSingleChat,
  updateChat,
  deleteSoft
}