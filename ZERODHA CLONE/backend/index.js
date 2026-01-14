import express from "express"
import connectDB from './src/db/index.js';

import dotenv from "dotenv"

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

dotenv.config({
    path: `./.env`
})

connectDB().then(() => {

    app.on("error", (err) => {
        console.log(err);
        throw err;
    })

    const port = process.env.PORT || 3002;

    app.listen(port, () => { // middleware
        console.log(`Server running at http://localhost:${port}`);
    });

}).catch((err) => {
    console.log("MONGO DB ERROR!", err);
})

// cross origin resouce sharing