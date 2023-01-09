
//user onboarding
exports.userOnboarding = async(req,res,next) =>{
    try{
    const user = req.user
    res.status(200).json({
        status:true,
        message:"User onboarded.",
        user:user
    })
} catch (e) {
    console.log(e)
}
}

// user login
exports.login = async(req,res,next) =>{
    try{
        const user = req.user
            res.status(200).json({
                status:true,
                message:"Success fully Logged In",
                user:user,
            })
        } catch (e) {
            console.log(e)
        }   
}