
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
    },
    phone:{
        type:Number
    },
    password:{
        type:String
    },
    userType:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    firebaseUid:{
        type:String,
        required:true,
        unique:true
    },
    firebaseSignInProvider:{
        type:String,
        required:true
    },
    active:{
        type:Boolean,
        default:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    loginType:{
        type:String
    },
    dob:{
        type:Date
    },
   
},
    {timestamps:true}
)


userSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret, options) => {
        delete ret.__v
        delete ret.id
    }
  })
module.exports = mongoose.model("User",userSchema,"User");
