import mongoose from 'mongoose';

const DB_NAME = "ZERODHA_CLONE";

const connectDB = async() => {
    try{
        // mongoose no longer accepts a callback
        const connectionInstance = await mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`)
        console.log(`\n MongoDB connected! DB HOST:${connectionInstance.connection.host}`);
        console.log(`Connected to DB: ${mongoose.connection.name}`); // Log the connected DB name
    }catch(err){
        console.log("DB Connection Failed", err.message);
        process.exit(1);
    }
}

export default connectDB;