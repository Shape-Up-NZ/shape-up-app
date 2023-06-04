import express from "express";
const router = express.Router();
import {
  createUserMealPlan,
  getUserMealPlan,
  updateUserMealPlan,
} from "../controllers/UserMealPlanController.js";
import { protect } from "../middleware/authMiddleware.js";

router
  .route("/meal-plan")
  .post(protect, createUserMealPlan)
  .put(protect, updateUserMealPlan);

router.route("/meal-plan/:date").get(protect, getUserMealPlan);

export default router;
