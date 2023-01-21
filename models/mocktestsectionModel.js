const mongoose = require("mongoose")

const mocktestsectionSchema = new mongoose.Schema({
    sectionName:{
        type:String
    },
    NoOfQuestions:{
        type:Number
    },
    Marks:{
        type:Number
    },
    negativeMarks:{
        type:Number
    },
    positiveMarks:{
        type:Number
    },
    time:{
        type:String
    },
    mocktest:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Mocktest',
    },
    isActive:{
        type:Boolean,
        default:true
    }
},
    {timestamps:true}
)


mocktestsectionSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret, options) => {
        delete ret.__v
        delete ret.id
    }
  })
module.exports = mongoose.model("mocktestsection",mocktestsectionSchema,"mocktestsection")
