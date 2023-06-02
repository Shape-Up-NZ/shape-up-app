import express from "express";
const router = express.Router();
import {
  createUserStatus,
  getUserStatus,
  updateUserStatus,
} from "../controllers/userStatusController.js";
import { protect } from "../middleware/authMiddleware.js";

router
  .route("/status")
  .post(protect, createUserStatus)
  .get(protect, getUserStatus)
  .put(protect, updateUserStatus);

export default router;
