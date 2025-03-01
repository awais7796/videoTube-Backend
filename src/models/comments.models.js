import mongoose,{Schema} from "mongoose";
/**
 *   _id string pk 
  content string 
  createdAt Date 
  updatedAt Date 
  video objectId videos 
  owner objectId users
 */
const userSchema=new Schema({},{timestamps:true})

export const User=mongoose.model("User",userSchema);