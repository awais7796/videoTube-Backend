import mongoose from "mongoose"
import{DB_NAME} from "../utils/constants.js"


const connectDB= async ()=>{
    try {
        const connectInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n mongo db connected!! Db Host :${connectInstance.connection.host}`);
        
    } catch (error) {
        console.log("mongo db connection err from db",error);
        process.exit(1);
        
    }
}

export default connectDB;