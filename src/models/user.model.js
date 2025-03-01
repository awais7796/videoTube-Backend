import mongoose,{Schema, Types} from "mongoose";
/*
_id string pk 
  watchhistory ObjectId videos
  username string 
  mail string 
  fullName string
  avatar string 
  coverImg string 
  password string 
  referToken string
  createdAt Date 
  updatedAt Date
*/
const userSchema=new Schema({
  
  watchhistory:{
    type:Schema.Types.ObjectId,
    ref:"Video"
  },
  username:{
    type:String,
    required:true,
    lowecase:true,
    unique:true ,
    trim:true,
    index:true
  },
  mail:{
    type:String,
    required:true,
    lowercase:true,
    unique:true,
  },
  fullName:{
    type:String ,
    required:true,
    trin:true ,
    index:true
  },
  avatar:{
    type:String,// cloudinary url
    required:true,

  },
  coverImg:{
    type:String
  },
  password:{
    type:String ,
    required:[true,"Password is required"],
    unique:true
  },
  referToken:{
    type:String
  }
 

},{timestamps:true})

export const User=mongoose.model("User",userSchema);