import mongoose,{Schema} from "mongoose";


/**
 * _id string pk 
owner objectId users 
contents string 
createdAt Date 
updatedAt Date 
 */


const tweetSchema=new Schema ({
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    contents:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

export const Tweet =mongoose.model("Tweet",tweetSchema)