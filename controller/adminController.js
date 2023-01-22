const Exam = require('../models/examModel')
const User = require('../models/userModel')
const md5 = require('md5')
const TestType = require('../models/testTypesModel')
const MockTest = require('../models/mocktestModel')
const MockTestSection = require('../models/mocktestsectionModel') 


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


// addMockTest
exports.addMockTest = async (req,res) => {
    try{
    let addMockTest = await MockTest.create(req.body)
    if(addMockTest) {
        res.send({status:true, message:"Mock Test added", data:addMockTest})
    } else {
        res.send({status:false, message:"Mock Test not added"})
    }
} catch(e) {
    console.log(e)
        res.send({status:false, message:"Error occurred"})
}
}

// getMockTest
exports.getMockTest = async (req,res) => {
    try {
    let found = await MockTest.find({})
    if(found.length>0) {
        res.send({status:true, message:"Mock Test details", data:found})
    } else {
        res.send({status:false, message:"No Mock Test details", data:[]})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}

// getOneMockTest Details
exports.getOneMockTest = async (req,res) => {
    try{
    let found = await MockTest.findOne({_id:req.params.mockTestId})
    if(found) {
        res.send({status:true, message:"Mock Test details", data:found})
    } else {
        res.send({status:false, message:"No Mock Test details"})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}

// update Mock Test
exports.updateMockTest = async (req,res) => {
    try{
    let updated = await MockTest.findOneAndUpdate({_id:req.body.mockTestId}, req.body)
    if(updated) {
        res.send({status:true, message:"Mock Test updated"})
    } else {
        res.send({status:false, message:"Mock Test not found"})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}


// delete Mock Test
exports.deleteMockTest = async (req,res) => {
    try{
    let deleted = await MockTest.findOneAndDelete({_id:req.params.mockTestId})
    if(deleted) {
        res.send({status:true, message:"Mock Test deleted"})
    } else {
        res.send({status:false, message:"Mock Test not found"})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}

// add Mock Test Section
exports.addMockTestSection = async (req,res) => {
    try{
    let addMockTestSection = await MockTestSection.create(req.body)
    if(addMockTestSection) {
        res.send({status:true, message:"Mock Test Section added", data:addMockTestSection})
    } else {
        res.send({status:false, message:"Mock Test Section not added"})
    }
} catch(e) {
    console.log(e)
        res.send({status:false, message:"Error occurred"})
}
}

// getMockTest
exports.getMockTestSection = async (req,res) => {
    try {
    let found = await MockTestSection.find({})
    if(found.length>0) {
        res.send({status:true, message:"Mock Test Section details", data:found})
    } else {
        res.send({status:false, message:"No Mock Test Section details", data:[]})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}

// getOne MockTest section Details
exports.getOneMockTestSection = async (req,res) => {
    try{
    let found = await MockTestSection.findOne({_id:req.params.mockTestSectionId})
    if(found) {
        res.send({status:true, message:"Mock Test Section details", data:found})
    } else {
        res.send({status:false, message:"No Mock Test Section details"})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}

// update Mock Test section
exports.updateMockTestSection = async (req,res) => {
    try{
    let updated = await MockTestSection.findOneAndUpdate({_id:req.body.mockTestSectionId}, req.body)
    if(updated) {
        res.send({status:true, message:"Mock Test Section updated"})
    } else {
        res.send({status:false, message:"Mock Test Section not found"})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}


// delete Mock Test Section 
exports.deleteMockTestSection = async (req,res) => {
    try{
    let deleted = await MockTestSection.findOneAndDelete({_id:req.params.mockTestSectionId})
    if(deleted) {
        res.send({status:true, message:"Mock Test Section deleted"})
    } else {
        res.send({status:false, message:"Mock Test section not found"})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}

// add Mock Test Section
exports.addTestType = async (req,res) => {
    try{
    let addTestType = await TestType.create(req.body)
    if(addTestType) {
        res.send({status:true, message:"Test Type added", data:addTestType})
    } else {
        res.send({status:false, message:"Test Type not added"})
    }
} catch(e) {
    console.log(e)
        res.send({status:false, message:"Error occurred"})
}
}

// getTestType
exports.getTestType = async (req,res) => {
    try {
    let found = await TestType.find({})
    if(found.length>0) {
        res.send({status:true, message:"Test Type Section details", data:found})
    } else {
        res.send({status:false, message:"Test Type details", data:[]})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}

// getOne TestType Details
exports.getOneTestType = async (req,res) => {
    try{
    let found = await TestType.findOne({_id:req.params.TestTypeId})
    if(found) {
        res.send({status:true, message:"Test type details", data:found})
    } else {
        res.send({status:false, message:"Test Type  details"})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}

// update TestType
exports.updateTestType = async (req,res) => {
    try{
    let updated = await TestType.findOneAndUpdate({_id:req.body.TestTypeId}, req.body)
    if(updated) {
        res.send({status:true, message:"Test Type updated"})
    } else {
        res.send({status:false, message:"Test Type not found"})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}


// delete Mock Test Section 
exports.deleteTestType = async (req,res) => {
    try{
    let deleted = await TestType.findOneAndDelete({_id:req.params.TestTypeId})
    if(deleted) {
        res.send({status:true, message:"Test Type deleted"})
    } else {
        res.send({status:false, message:"Test Type not found"})
    }
} catch (e) {
    console.log(e)
    res.send({status:false, message:"Error occurred"})
}
}