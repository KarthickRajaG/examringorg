
const mongoose = require("mongoose")

const sectionSchema = new mongoose.Schema({
    sectionName:{
        type:String
    },
    testType:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'testType',
    },
    isActive:{
        type:Boolean,
        default:true
    }
},
    {timestamps:true}
)


sectionSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret, options) => {
        delete ret.__v
        delete ret.id
    }
  })
module.exports = mongoose.model("section",sectionSchema,"section")
