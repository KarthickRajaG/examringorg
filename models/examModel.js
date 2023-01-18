
const mongoose = require("mongoose")

const examSchema = new mongoose.Schema({
    examName:{
        type:String
    },
    image:{
        type:String
    },
    status:{
        type:Boolean,
        default:true
    }
},
    {timestamps:true}
)


examSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret, options) => {
        delete ret.__v
        delete ret.id
    }
  })
module.exports = mongoose.model("Exam",examSchema,"Exam")
