import mongoose,{Schema, Types} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
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

//for encrypting the pass first time and at modfication 
userSchema.pre("save",async function (next){
  if(!this.modified("password")) return next()
  this.password= await bcrypt.hash(this.password,10);
next();
})

//for password validation/ compariion 
userSchema.methods.isPasswordCorrect=async function(password){
  return await bcrypt.compare(password,this.password);
}


userSchema.methods.generateAccessToken=function(){
  return jwt.sign({
    __id : this.__id,
    email :this.email,
    fullName: this.fullName
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  }
)
}

userSchema.methods.generateRefreshToken=function(){
  return jwt.sign({
    __id:this.__id
  },
process.env.REFRESH_TOKEN_SECRET,
{
  expiresIn:process.env.REFRESH_TOKEN_EXPIRY
}
)
}







export const User=mongoose.model("User",userSchema);