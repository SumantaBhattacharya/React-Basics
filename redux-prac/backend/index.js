import express from "express"; // asynchronous
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./src/config/db.config.js";

import auth_Routes from "./src/routes/auth.route.js"

import { errorHandler } from "./src/utils/ApiError.js";

const app = express();

app.use(cors({
  origin: "http://localhost:3000", // React app URL (Vite default)
  credentials: true, // This is crucial for cookies
}));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser()); 

// routes
app.use("/api/auth", auth_Routes)

// error handler should be last
app.use(errorHandler);

// connect to db
// import connectDB from "./src/config/db.config.js";
// connectDB();
connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log(err);
      throw err;
    });
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      // middleware
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB ERROR!", err);
  });

// const port = process.env.PORT || 8000;
// app.listen(port, () => {
//   // middleware
//   console.log(`Server running at http://localhost:${port}`);
// });
