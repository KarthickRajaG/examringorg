
const mongoose = require("mongoose")

const testTypeSchema = new mongoose.Schema({
    testName:{
        type:String
    },
    exam:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Exam',
        autopopulate:true
    },
    isActive:{
        type:Boolean,
        default:true
    }
},
    {timestamps:true}
)


testTypeSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret, options) => {
        delete ret.__v
        delete ret.id
    }
  })
  
testTypeSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model("testType",testTypeSchema,"testType")
