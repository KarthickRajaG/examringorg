const router = require("express").Router()
const {requiresAuth,generateToken} = require("../controller/firebaseController")
const adminController = require("../controller/adminController")

// admin login
router.post("/adminLogin", adminController.adminLogin)
router.get("/getAdminDetails/:adminId", requiresAuth, adminController.getAdminDetails)
router.get("/userList", requiresAuth, adminController.userList)

// add Exams
router.post("/addExams", requiresAuth, adminController.addExams)
router.get("/getExams", requiresAuth, adminController.getExams)
router.get("/getOneExam/:examId", requiresAuth, adminController.getOneExam)
router.post("/updateExam", requiresAuth, adminController.updateExam)
router.get("/deleteExam/:examId", requiresAuth, adminController.deleteExam)

// testTypes
router.post("/addTestType", requiresAuth, adminController.addTestType)
router.get("/getTestType", requiresAuth, adminController.getTestType)
router.get("/getOneTestType/:TestTypeId", requiresAuth, adminController.getOneTestType)
router.post("/updateTestType", requiresAuth, adminController.updateTestType)
router.get("/deleteTestType/:TestTypeId", requiresAuth, adminController.deleteTestType)

// mocktest
router.post("/addMockTest", requiresAuth, adminController.addMockTest)
router.get("/getMockTest", requiresAuth, adminController.getMockTest)
router.get("/getOneMockTest/:mockTestId", requiresAuth, adminController.getOneMockTest)
router.post("/updateMockTest", requiresAuth, adminController.updateMockTest)
router.get("/deleteMockTest/:mockTestId", requiresAuth, adminController.deleteMockTest)

// mock test section
router.post("/addMockTestSection", requiresAuth, adminController.addMockTestSection)
router.get("/getMockTestSection", requiresAuth, adminController.getMockTestSection)
router.get("/getOneMockTestSection/:mockTestSectionId", requiresAuth, adminController.getOneMockTestSection)
router.post("/updateMockTestSection", requiresAuth, adminController.updateMockTestSection)
router.get("/deleteMockTestSection/:mockTestSectionId", requiresAuth, adminController.deleteMockTestSection)


module.exports = router
