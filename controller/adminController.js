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
    let addExam = Exam.create(req.body)
    if(addExam) {
        res.send({status:true, message:"Exam added", data:addExam})
    } else {
        res.send({status:false, message:"Exam not added"})
    }
} 