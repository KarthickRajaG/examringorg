const router = require("express").Router()
const {requiresAuth,restrictTo,generateToken} = require("../controller/firebaseController")
const userController = require("../controller/userController")

router.post("/onboarding",requiresAuth,userController.userOnboarding)
router.post("/generate-token/:uid",generateToken)
router.post("/login",requiresAuth,userController.login)
router.get("/userHistory",userController.userHistory)



module.exports = router
