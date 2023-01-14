const router = require("express").Router()
const {requiresAuth,generateToken} = require("../controller/firebaseController")
const adminController = require("../controller/adminController")

router.post("/addExams",requiresAuth,adminController.addExams)


module.exports = router
