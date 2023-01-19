const Exam = require('../models/examModel')
const User = require('../models/userModel')
const md5 = require('md5')


// adminLogin
exports.adminLogin = async (req,res) => {
    try{
    let found = await User.findOne({email:req.body.email,password:req.body.password})
    if(found) {
        res.send({status:true, message:"admin details", data:found})
    } else {
        res.send({status:false, message:'admin not found'})
    }
 } catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
 }   
}

// getAdminDetails
exports.getAdminDetails = async (req,res) => {
    try{
     let found = await User.findOne({_id:req.params.adminId})
     if(found) {
        res.send({status:true, message:"admin details found", data:found})
     } else {
        res.send({status:false, message:"amin details not found"})
     }
    } catch (e) {
        console.log(e)
        res.send({status:false, message:"Error occurred"})
    }
}

// addExams
exports.addExams = async (req,res) => {
    try{
    let addExam = await Exam.create(req.body)
    if(addExam) {
        res.send({status:true, message:"Exam added", data:addExam})
    } else {
        res.send({status:false, message:"Exam not added"})
    }
} catch(e) {
    console.log(e)
        res.send({status:false, message:"Error occurred"})
}
}

// getExams
exports.getExams = async (req,res) => {
    try {
    let found = await Exam.find({})
    if(found.length>0) {
        res.send({status:true, message:"Exam details", data:found})
    } else {
        res.send({status:false, message:"No exam details", data:[]})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}

// getOneExam Details
exports.getOneExam = async (req,res) => {
    try{
    let found = await Exam.findOne({_id:req.params.examId})
    if(found) {
        res.send({status:true, message:"Exam details", data:found})
    } else {
        res.send({status:false, message:"No exam details"})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}

// update Exam
exports.updateExam = async (req,res) => {
    try{
    let updated = await Exam.findOneAndUpdate({_id:req.body.examId}, req.body)
    if(updated) {
        res.send({status:true, message:"Exam details updated"})
    } else {
        res.send({status:false, message:"Exam details not found"})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}

// delete exam
exports.deleteExam = async (req,res) => {
    try{
    let deleted = await Exam.findOneAndDelete({_id:req.params.examId})
    if(deleted) {
        res.send({status:true, message:"Exam details deleted"})
    } else {
        res.send({status:false, message:"Exam not found"})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}

// userList
exports.userList = async (req,res) => {
    try {
        let found = await User.find({userType:'user'})
        if(found.length>0) {
            res.send({status:true, message:"user list", data:found})
        } else {
            res.send({status:false, message:"no user list"})
        }
    } catch (e) {
        console.log(e)
        res.send({status:false, message:"error occurred"})
    }
}