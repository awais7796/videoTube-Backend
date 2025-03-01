import mongoose, {Schema}from "mongoose";

/* 
_id string pk
videoFile string 
thumbnail string
owner objectid users
title string
description string
duration number
views number
isPublishAt date
createdAt Date 
updatedAt Date
*/




const videoSchema =new Schema ({
    videoFile:{
        type:String,
        unique:true 
    },
    thumbnail:{
        type:String,
        required:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublishAt:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true
})



export const Video=mongoose.model("Video",videoSchema)