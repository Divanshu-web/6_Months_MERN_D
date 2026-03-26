const skill = require('../models/skillModel')

// TO CREATE A MOVIE
const addSkillToDB = async (req, res) => {
  try {
    const incomingData = req.body || {};
    const { skillName } = incomingData;
    const { category } = incomingData;
    const { trainer } = incomingData;
    const { user } = incomingData;
    const { duration } = incomingData;
    const { start } = incomingData;
    const { end } = incomingData;


    const totalDocs = await skill.countDocuments({});

    const skillData = new skill({
      autoId: totalDocs + 1,
      skillName,
      category,
      trainer,
      user,
      duration,
      start,
      end 
    });

    await skillData.save()

    res.json({
      status: 201,
      success: true,
      message: "skill Created",
      data: skillData
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
const getAllSkill = async (req, res) => {
  const dbData = await skill.find({isDelete: false});
  const totalDocs = await skill.countDocuments({isDelete: false});
  res.json({
    status: 200,
    total: totalDocs,
    success: true,
    message: "skill fetched",
    data: dbData
  })
}


// TO GET SINGLE MOVIE
const getSingleSkill = async (req, res) => {
  const skillId = req.params.id;
  const skills = await skill.find({ _id: skillId , isDelete: false});

  res.json({
    status: 200,
    success: true,
    message: "skill fetched",
    data: skills
  })
}


// UPDATE
const updateSkill = async (req, res) => {
  const skillId = req.params.id;
  const incomingData = req.body;
  const updatedSkill = await skill.findByIdAndUpdate(skillId, incomingData, { new: true });

  res.json({
    success: true,
    message: "Data Updated",
    data: updatedSkill
  })
}


// DELETE - 
// SOFT DELETE
const deleteSoft = async (req, res) => {
   try {
    const skillId = req.body.id;

    if(!skillId){
       return res.json({
        status: 400,
        success: false,
        message: "skill id is required"
      })
    }

    const deleteSkill = await skill.findByIdAndUpdate(skillId, {isDelete : true}, { new: true });

    if(!deleteSkill){
      return res.json({
        status: 400,
        success: false,
        message: "skill not found"
      })
    }

    res.json({
      status: 200,
      success: true,
      message: "skill deleted successfully",
      data: deleteSkill
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
  getAllSkill,
  addSkillToDB,
  getSingleSkill,
  updateSkill,
  deleteSoft
}