import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

   firstname:{
     type:String,
     required: true
   },
   lastname:{
    type:String,
    required: true
  },
  password:{
    type:String,
    required:true
  }
})

mongoose.model("User",userSchema);