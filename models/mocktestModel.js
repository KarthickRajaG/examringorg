
const mongoose = require("mongoose")

const mocktestSchema = new mongoose.Schema({
    mocktestName:{
        type:String
    },
    testType:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'testType',
        autopopulate:true
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

mocktestSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model("Mocktest",mocktestSchema,"Mocktest")
