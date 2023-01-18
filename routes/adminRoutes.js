const router = require("express").Router()
const {requiresAuth,generateToken} = require("../controller/firebaseController")
const adminController = require("../controller/adminController")

// admin login
router.post("/adminLogin",adminController.adminLogin)

// add Exams
router.post("/addExams", requiresAuth, adminController.addExams)
router.get("/getExams", requiresAuth, adminController.getExams)
router.get("/getOneExam/:examId", requiresAuth, adminController.getOneExam)
router.post("/updateExam", requiresAuth, adminController.updateExam)
router.get("/deleteExam/:examId", requiresAuth, adminController.deleteExam)

module.exports = router
