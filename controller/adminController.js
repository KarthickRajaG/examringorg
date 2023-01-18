const Exam = require('../models/examModel')
const User = require('../models/userModel')
const md5 = require('md5')


// adminLogin
exports.adminLogin = async (req,res) => {
 let found = await User.findOne({email:req.body.email,password:req.body.password})
 if(found) {
    res.send({status:true, message:"admin details", data:found})
 } else {
    res.send({status:false, message:'admin not found'})
 }
}

// addExams
exports.addExams = async (req,res) => {
    let addExam = await Exam.create(req.body)
    if(addExam) {
        res.send({status:true, message:"Exam added", data:addExam})
    } else {
        res.send({status:false, message:"Exam not added"})
    }
}

// getExams
exports.getExams = async (req,res) => {
    let found = await Exam.find({})
    if(found.length>0) {
        res.send({status:true, message:"Exam details", data:found})
    } else {
        res.send({status:false, message:"No exam details", data:[]})
    }
}

// getOneExam Details
exports.getOneExam = async (req,res) => {
    let found = await Exam.findOne({_id:req.params.examId})
    if(found) {
        res.send({status:true, message:"Exam details", data:found})
    } else {
        res.send({status:false, message:"No exam details"})
    }
}

// update Exam
exports.updateExam = async (req,res) => {
    let updated = await Exam.findOneAndUpdate({_id:req.body.examId}, req.body)
    if(updated) {
        res.send({status:true, message:"Exam details updated"})
    } else {
        res.send({status:false, message:"Exam details not found"})
    }
}

// delete exam
exports.deleteExam = async (req,res) => {
    let deleted = await Exam.findOneAndDelete({_id:req.params.examId})
    if(deleted) {
        res.send({status:true, message:"Exam details deleted"})
    } else {
        res.send({status:false, message:"Exam not found"})
    }
}