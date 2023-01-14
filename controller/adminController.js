const Exam = require('../models/examModel')

// addExams
exports.addExams = async (req,res) => {
    let addExam = Exam.create(req.body)
    if(addExam) {
        res.send({status:true, message:"Exam added", data:addExam})
    } else {
        res.send({status:false, message:"Exam not added"})
    }
}