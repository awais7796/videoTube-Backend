/**
 *  _id string pk 
  comments objectId comments
  video objectId videos 
  likedBy objectId users 
  tweet ObjectId tweets
  createdAt Date 
  uodatedAt date 
 */

  import mongoose,{Schema} from "mongoose";


  const likeSchema=new Schema ({
    comments:{
        type:Schema.Types.ObjectId,
        ref:"Comment"
    },
    vide:{
         type:Schema.Types.ObjectId,
        ref:"Video"
    },
    likedBy:{
         type:Schema.Types.ObjectId,
        ref:"User"
    },
    tweet:{
         type:Schema.Types.ObjectId,
        ref:"Tweet"
    }
  },{
    timestamps:true
  })


export const Like= mongoose.model("Like",likeSchema)