const UserHistory = require('../models/userHistoryModel')

//user onboarding
exports.userOnboarding = async(req,res,next) =>{
    try{
    const user = req.user
    res.status(200).json({
        status:true,
        message:"User onboarded.",
        user:user
    })
} catch (e) {
    console.log(e)
}
}

// user login
exports.login = async(req,res,next) =>{
    try{
        const user = req.user
            res.status(200).json({
                status:true,
                message:"Success fully Logged In",
                user:user,
            })
        } catch (e) {
            console.log(e)
        }   
}

// user history
exports.userHistory = async(req,res) => {
    let found = await UserHistory.find({})
    if(found.length) {
        res.send({status:true, message:"user history list", data:found})
    } else {
        res.send({status:false, message:"no user history data"})
    }
} 