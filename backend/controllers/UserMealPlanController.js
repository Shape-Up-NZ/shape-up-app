import asyncHandler from "express-async-handler";
import UserMealPlan from "../models/UserMealPlanModel.js";

// @desc      Create user meal plan
// @route     POST /api/user/meal-plan
// @access    Private
const createUserMealPlan = asyncHandler(async (req, res) => {
  const { date, meal1, meal2, meal3, meal4, meal5, snacks } = req.body;
  const userId = req.user._id;

  const userMealPlan = await UserMealPlan.create({
    userId,
    date,
    meal1,
    meal2,
    meal3,
    meal4,
    meal5,
    snacks,
  });

  if (userMealPlan) {
    res.status(201).json(userMealPlan);
  } else {
    res.status(400);
    throw new Error("Invalid user meal plan data");
  }
});

// @desc      Get user meal plan for a specific date
// @route     GET /api/user/meal-plan/:date
// @access    Private
const getUserMealPlan = asyncHandler(async (req, res) => {
  const { date } = req.params;
  const userId = req.user._id;

  const userMealPlan = await UserMealPlan.findOne({ userId, date });

  if (userMealPlan) {
    res.status(200).json(userMealPlan);
  } else {
    res.status(404);
    throw new Error("User meal plan not found");
  }
});

// @desc      Update user meal plan for a specific date
// @route     PUT /api/user/meal-plan/:date
// @access    Private
const updateUserMealPlan = asyncHandler(async (req, res) => {
  const { date, meal1, meal2, meal3, meal4, meal5, snacks } = req.body;
  const userId = req.user._id;

  let userMealPlan = await UserMealPlan.findOne({ userId, date });

  if (!userMealPlan) {
    // If user meal plan doesn't exist, create a new one
    userMealPlan = await UserMealPlan.create({
      userId,
      date,
      meal1,
      meal2,
      meal3,
      meal4,
      meal5,
      snacks,
    });
    res.status(201).json(userMealPlan);
  } else {
    // If user meal plan exists, update it
    userMealPlan.meal1 = meal1 || userMealPlan.meal1;
    userMealPlan.meal2 = meal2 || userMealPlan.meal2;
    userMealPlan.meal3 = meal3 || userMealPlan.meal3;
    userMealPlan.meal4 = meal4 || userMealPlan.meal4;
    userMealPlan.meal5 = meal5 || userMealPlan.meal5;
    userMealPlan.snacks = snacks || userMealPlan.snacks;

    const updatedUserMealPlan = await userMealPlan.save();
    res.status(200).json(updatedUserMealPlan);
  }
});

export { createUserMealPlan, getUserMealPlan, updateUserMealPlan };
