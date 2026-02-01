import express from "express";

import { register, login, logout, refreshAccessToken, changeCurrentPassword, getCurrentUser, updateAccountDetails, getAllUsers } from '../controllers/user.controller.js'
import { authMiddlewere } from "../middlewere/auth.middlewere.js";

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);

router.post("/logout", authMiddlewere, logout);

router.post("/refresh-token", refreshAccessToken);

router.route("/change-password").post(authMiddlewere, changeCurrentPassword)

// .route() only takes the path string, not middleware.
router.route("/current-user").get(authMiddlewere, getCurrentUser);

router.route("/update-details").patch(authMiddlewere, updateAccountDetails);

router.route("/allUsers").get(authMiddlewere, getAllUsers);

export default router;