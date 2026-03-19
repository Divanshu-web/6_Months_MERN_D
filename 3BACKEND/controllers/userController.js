const user = require('../models/userModel.js')

const getAllUsers = (req, res)=>{
  res.json({
    status: 200,
    success: true,
    message:"Users fetched",
    data: user
  })
}


const addUser = (req, res)=>{
  const incomingData = req.body;
  console.log(incomingData);
  
  if(!incomingData.name || !incomingData.email || !incomingData.phone  || !incomingData.age || !incomingData.location || !incomingData.skillsOffered || !incomingData.skillsWanted || !incomingData.experienceLevel){
    return res.json({
      status: 400, 
      success: false,
      message: "Incomplete data"
    })
  }

  const users = {
    id: user.length + 1,
    name: incomingData.name,
    email: incomingData.email,
    phone: incomingData.phone,
    age: incomingData.age,
    location: incomingData.location,
    skillsOffered: incomingData.skillsOffered,
    skillsWanted: incomingData.skillsWanted,
    experienceLevel: incomingData.experienceLevel,
  }

  user.push(users);

  res.json({
    status: 200,
    success: true,
    message: "users saved successfully",
    data : user
  })
}


const fetchSingleUser = (req, res) => {
    const userId = req.params.id;

    const users = user.find(f => f.id == userId)
    res.json(
        {
            status: 200,
            success: true,
            message: "users data fetched successfully",
            data: users
        }
    );
}

const searchUsers = (req, res) => {
    const query = req.query.q?.toLowerCase();

    if (!query) {
        return res.json({
            status: 400,
            success: false,
            message: "Please provide search query"
        });
    }

    const result = user.filter(u =>
        u.name.toLowerCase().includes(query) ||
        u.skillsOffered.toLowerCase().includes(query) ||
        u.location.toLowerCase().includes(query)
    );

    res.json({
        status: 200,
        success: true,
        message: "Users fetched successfully",
        data: result
    });
};


module.exports = {
    getAllUsers,
    addUser,
    fetchSingleUser,
    searchUsers
}


