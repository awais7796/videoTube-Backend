import mongoose,{Schema} from "mongoose";
/**
 *   _id string pk 
  content string 
  createdAt Date 
  updatedAt Date 
  video objectId videos 
  owner objectId users
 */
const commentSchema=new Schema({
    content:{
        type:String,
        required:true
    },
    video:{
         type:Schema.Types.ObjectId,
        ref:"Video"
    },
    owner:{
         type:Schema.Types.ObjectId,
        ref:"user"
    }
},{
    timestamps:true
})

export const Comment=mongoose.model("Comment",commentSchema);