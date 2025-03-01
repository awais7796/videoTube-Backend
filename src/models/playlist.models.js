import mongoose,{Schmea } from "mongoose";



/**
 *  _id string pk 
  name string 
  description string 
  creadtedAt Date 
  updatedAt Date
  videos objectid[] videos
  owner objectID users
 */



  const playlistSchema =new Schmea({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    videos:{
        type:Schmea.Types.objectId,
        ref:"Video"
    },
    owner:{
        type:Schmea.Types.objectId,
        ref:"User"
    }



  },{
    timestamps:ture
  })

  export const Playlist=mongoose.model("Playlist",playlistSchema)