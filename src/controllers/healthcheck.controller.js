import {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";


const healthcheck= asyncHandler(async (req,res)=>{
    return res
    .status(200)
    .json( new ApiResponse(200,"OK","health check Passed"))
})
export {healthcheck}

/**
const healthCheck=async  (req,res)=>{
    try {
        
} catch (error) {
    
}
}
*/