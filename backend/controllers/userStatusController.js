import asyncHandler from "express-async-handler";
import Status from "../models/userStatusModel.js";

// @desc      Create user status
// @route     POST /api/user/status
// @access    Private
const createUserStatus = asyncHandler(async (req, res) => {
  const {
    height,
    weight,
    goalWeight,
    age,
    gender,
    dateOfBirth,
    activityLevel,
    goal,
  } = req.body;
  const user = req.user._id;

  const status = await Status.create({
    user,
    height,
    weight,
    goalWeight,
    age,
    gender,
    dateOfBirth,
    activityLevel,
    goal,
  });

  if (status) {
    res.status(201).json(status);
  } else {
    res.status(400);
    throw new Error("Invalid user status data");
  }
});

// @desc      Get user status
// @route     GET /api/user/status
// @access    Private
const getUserStatus = asyncHandler(async (req, res) => {
  const user = req.user._id;

  const status = await Status.findOne({ user });

  if (status) {
    res.status(200).json(status);
  } else {
    res.status(404);
    throw new Error("User status not found");
  }
});

// @desc      Update user status
// @route     PUT /api/user/status
// @access    Private
const updateUserStatus = asyncHandler(async (req, res) => {
  const {
    height,
    weight,
    goalWeight,
    age,
    gender,
    dateOfBirth,
    activityLevel,
    goal,
  } = req.body;
  const user = req.user._id;

  let status = await Status.findOne({ user });

  if (!status) {
    // If user status doesn't exist, create a new one
    status = await Status.create({
      user,
      height,
      weight,
      goalWeight,
      age,
      gender,
      dateOfBirth,
      activityLevel,
      goal,
    });
    res.status(201).json(status);
  } else {
    // If user status exists, update it
    status.height = height || status.height;
    status.weight = weight || status.weight;
    status.goalWeight = goalWeight || status.goalWeight;
    status.age = age || status.age;
    status.gender = gender || status.gender;
    status.dateOfBirth = dateOfBirth || status.dateOfBirth;
    status.activityLevel = activityLevel || status.activityLevel;
    status.goal = goal || status.goal;

    const updatedStatus = await status.save();
    res.status(200).json(updatedStatus);
  }
});

export { createUserStatus, getUserStatus, updateUserStatus };
