const router = require("express").Router()
const {requiresAuth,generateToken} = require("../controller/firebaseController")
const adminController = require("../controller/adminController")

// admin login
router.post("/adminLogin",adminController.adminLogin)
router.get("/getAdminDetails/:adminId", adminController.getAdminDetails)
router.get("/userList", adminController.userList)

// add Exams
router.post("/addExams", adminController.addExams)
router.get("/getExams", adminController.getExams)
router.get("/getOneExam/:examId", adminController.getOneExam)
router.post("/updateExam", adminController.updateExam)
router.get("/deleteExam/:examId", adminController.deleteExam)

module.exports = router
