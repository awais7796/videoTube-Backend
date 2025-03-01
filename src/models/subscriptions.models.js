import mongoose,{Schema} from "mongoose";


/**
 *  _id string pk 
  subscriber objectId users 
  channel objectId users
  createdAt Date 
  updatedAt Date 
 */


  const subscriptionSchema=new Schema({
    subscriber:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    channel:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }



  },{timestamps:true})


  export const Subscription =mongoose.model("Subscription",subscriptionSchema)