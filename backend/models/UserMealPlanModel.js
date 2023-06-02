import mongoose from "mongoose";

const userMealPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  meal1: {
    type: String,
  },
  meal2: {
    type: String,
  },
  meal3: {
    type: String,
  },
  meal4: {
    type: String,
  },
  meal5: {
    type: String,
  },
  snacks: {
    type: String,
  },
});


const MealPlan = mongoose.model("MealPlan", userMealPlanSchema);

export default MealPlan;