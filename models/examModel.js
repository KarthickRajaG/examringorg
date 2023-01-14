
const mongoose = require("mongoose")

const examSchema = new mongoose.Schema({
    examNName:{
        type:String
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
