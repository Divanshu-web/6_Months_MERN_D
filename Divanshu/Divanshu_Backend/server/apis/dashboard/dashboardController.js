// const customerModel = require("../cutomer/customerModel");
// const productMode = require("../product/productMode");

const sessionModel = require("../session/sessionModel");
const requestModel = require("../request/requestModel");
const skillModel = require("../skill/skillModel");
const learnerMentorModel = require("../learnerMentor/learnerMentorModel");


const dashboard = async (req, res) => {

    // const totalSessions = await sessionModel.countDocuments({isDelete: false}); 
    // const totalRequests = await requestModel.countDocuments({isDelete: false}); 
    // const totalSkills = await skillModel.countDocuments({isDelete: false}); 
    // const totallearnerMentor = await learnerMentorModel.countDocuments({isDelete: false}); 

    const [
        totalSessions,
        totalRequests,
        totalSkills,
        totallearnerMentor
    ] =
        await Promise.all([
        sessionModel.countDocuments({ isDelete: false }),
        requestModel.countDocuments({ isDelete: false }),
        skillModel.countDocuments({ isDelete: false }),
        learnerMentorModel.countDocuments({ isDelete: false })
        ])

    res.json({
        success: true,
        status: 200,
        message: "Stats Loaded",
        data: {
        totalSessions,
        totalRequests,
        totalSkills,
        totallearnerMentor
        }
    }
    )
}


const LearnerMentordashboard = async (req, res) => {

    
   try{ 
        const LearnerMentorId = req.body?.LearnerMentorId;

        console.log(LearnerMentorId);
    // const totalSessions = await sessionModel.countDocuments({isDelete: false}); 
    // const totalRequests = await requestModel.countDocuments({isDelete: false}); 
    // const totalSkills = await skillModel.countDocuments({isDelete: false}); 
    // const totallearnerMentor = await learnerMentorModel.countDocuments({isDelete: false}); 

    const [
        // totalSessions,
        totalRequests,
        mybookings,
        mySkills,
        // totallearnerMentor
    ] =
        await Promise.all([
        requestModel.countDocuments({ isDelete: false , mentorId: LearnerMentorId}),
        requestModel.countDocuments({ isDelete: false , learnerId: LearnerMentorId}),
        // requestModel.countDocuments({ isDelete: false }),
        skillModel.countDocuments({ isDelete: false, learnermentorId: LearnerMentorId}),
        // learnerMentorModel.countDocuments({ isDelete: false })
        ])

    res.json({
        success: true,
        status: 200,
        message: "Stats Loaded",
        data: {
        // totalSessions,
        totalRequests,
        mybookings,
        mySkills,
        // totallearnerMentor
        }
    }
    )


   }
   catch(err){
      res.json({
                status: 500,
                success: false,
                message: "Internal Server Error: " + err,
            })
   }


}



module.exports = { dashboard, LearnerMentordashboard }