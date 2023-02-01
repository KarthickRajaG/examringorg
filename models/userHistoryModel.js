
const mongoose = require("mongoose")

const userHistorySchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate:true
    },
    deviceToken:{
        type:String
    },
    deviceType:{
        type:String
    }
   
},
    {timestamps:true}
)


userHistorySchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret, options) => {
        delete ret.__v
        delete ret.id
    }
  })

userHistorySchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model("UserHistory",userHistorySchema,"UserHistory")