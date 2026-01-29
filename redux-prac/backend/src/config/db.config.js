// const MONGO_URL = "mongodb://delta_admin:delta_password@localhost:27017";
// const client = new MongoClient(MONGO_URL);

// export default client;

import mongoose from 'mongoose';

const DB_NAME = "redux_db_store";

const connectDB = async() => {
    try{
        // mongoose no longer accepts a callback
        const connectionInstance = await mongoose.connect(`mongodb://delta_admin:delta_password@localhost:27017/${DB_NAME}?authSource=admin`)
        console.log(`\n MongoDB connected! DB HOST:${connectionInstance.connection.host}`);
        console.log(`Connected to DB: ${mongoose.connection.name}`); // Log the connected DB name
    }catch(err){
        console.log("DB Connection Failed", err.message);
        process.exit(1);
    }
}

export default connectDB;