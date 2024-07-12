const mongoose = require("mongoose")

const todoShema = new mongoose.Schema({
   title:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   }
})

module.exports = mongoose.model("todo",todoShema,"todos")