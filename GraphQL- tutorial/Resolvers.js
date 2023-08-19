import { quosts,users } from "./Fakedb.js"
import {randomBytes} from 'crypto';
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

 
 const User = mongoose.model("User")
 
import bcrypt from "bcryptjs";
import { JWT_SECRET } from "./config.js";

const resolvers = {
  Query : {
     users:() => users,
     User:(_,{_id}) => users.find(user=>user._id == _id),
     iquote:(_,{by}) => quosts.filter(quote => quote.by == by),
     quotes: () => quosts
  },
  user : {
    quotes: (user)=>quosts.filter(quoste => quoste.by == user._id)
  },

  Mutation : {
    SignupUser: async (_,{newUser})=>{
          const user = await User.findOne({email: newUser.email})
          if(user){
            throw new Error("User already Exists")
          }

          // hashing password

          const hasedPass = await bcrypt.hash(newUser.password,12)

         const newuser =  new User({...newUser,
            password:hasedPass
          })

         return await newuser.save()


    },
    signinUser:async (_,{userSignin})=>{
      const user = await User.findOne({email:userSignin.email})
      if(!user){
          throw new Error("User dosent exists with that email")
      }
      const doMatch =await bcrypt.compare(userSignin.password,user.password)
      if(!doMatch){
          throw new Error("email or password in invalid")
      }
      const token = jwt.sign({userId:user._id},JWT_SECRET)
      return {token}
     },
  }
}

export default resolvers;