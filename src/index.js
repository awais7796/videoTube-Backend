import dotenv from "dotenv"
import {app} from "./app.js"
import connectDB from "./db/index.js";




dotenv.config({
    path:"./.env"
})
const  PORT =process.env.PORT||4000;

console.log(process.env.MONGODB_URL);

connectDB(
    console.log("Connecting to DB...")
)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT} ..`);
        
    })

})
.catch((err)=>{
    console.log("mongo db connect err ",err);
    
})