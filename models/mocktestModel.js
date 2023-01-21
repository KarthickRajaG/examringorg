
const mongoose = require("mongoose")

const mocktestSchema = new mongoose.Schema({
    mocktestName:{
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


mocktestSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret, options) => {
        delete ret.__v
        delete ret.id
    }
  })
module.exports = mongoose.model("Mocktest",mocktestSchema,"Mocktest")
