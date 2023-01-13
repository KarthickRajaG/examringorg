const admin = require("firebase-admin")
const serviceAccount = require("../examring-private-key.json")
const User = require("../models/userModel")
const { getAuth, signInWithCustomToken } = require("firebase/auth")
require("../utils/firebaseweb")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const requiresAuth = async (req,res,next) =>{
    const idToken = req.header("Authorization")
    if(!idToken){
        return res.status(400).send({status:false, message:'Please pass firebase auth token '})
    }
    const bearer = idToken.split(' ')
    const token = bearer[1]

    let decodedIdToken;
    try{
        decodedIdToken = await admin.auth().verifyIdToken(token,true)
    }catch(error){
        console.log(error)
        next(error)
        return res.status(500).json({message:error.message})
    }
    let user =  await User.findOne({firebaseUid:decodedIdToken.uid})
    if(!user){
        if(req.baseUrl + req.path =="/api/v1/user/onboarding"){
            if(decodedIdToken.firebase.sign_in_provider === "phone"){
                user = await User.create({
                    phone:decodedIdToken.phone_number,
                    firebaseUid:decodedIdToken.uid,
                    firebaseSignInProvider:decodedIdToken.firebase.sign_in_provider,
                    email:req.body.email,
                    userType:req.body.userType
                })
            }else{
                user = await User.create({
                    email:decodedIdToken.email,
                    firebaseUid:decodedIdToken.uid,
                    firebaseSignInProvider:decodedIdToken.firebase.sign_in_provider,
                    userType:req.body.userType,
                    loginType:req.body.loginType
                })
            }
        }else{
            return res.send({status:false, message:'this is wrong api url to onboard user'})
        }
    } 
   
    req.user = user
    next()
}

const restrictTo = (...roles) =>{
    return (req,res,next) =>{
        if(!roles.includes(req.user.userType)){
            return next(new AppError('You do not have permission ot perform this action',403));
        }
        next();
    }
};

//Only for backend developer to generate token to call APIS
const generateToken = async(req,res,next) => {
    try{
        const token =  await admin.auth().createCustomToken(req.params.uid);
        const user = await signInWithCustomToken(getAuth(),token);
        const idToken = user._tokenResponse.idToken

        return res.status(200).json({
            status: true,
            token: idToken
        });

    }catch(err){
        console.log(err)
        return res.status(500).json({
            status:false,
            msg:err.message
        })
    }
}


module.exports = {
    requiresAuth,
    restrictTo,
    generateToken,
}
