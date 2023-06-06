import asyncHandler from "express-async-handler";
import UserWaterIntake from "../models/userWaterIntakeModel.js";

// @desc        Log user's water intake
// route        POST /api/users/water-intake
// @access      Private
const logWaterIntake = asyncHandler(async (req, res) => {
  const { litersDrank } = req.body;
  const date = new Date().toISOString().split("T")[0]; // Automatically set the date to today's date

  let waterIntake = await UserWaterIntake.findOne({
    userId: req.user._id,
    date,
  });

  if (!waterIntake) {
    // If water intake doesn't exist for today, create a new one
    waterIntake = await UserWaterIntake.create({
      userId: req.user._id,
      date,
      litersDrank,
    });
    res.status(201).json(waterIntake);
  } else {
    // If water intake exists for today, update it
    waterIntake.litersDrank += litersDrank;

    const updatedWaterIntake = await waterIntake.save();
    res.status(200).json(updatedWaterIntake);
  }
});

// @desc        Update user's water intake
// route        PUT /api/users/water-intake/:date
// @access      Private
const updateWaterIntake = asyncHandler(async (req, res) => {
  const { litersDrank } = req.body;
  const { date } = req.params;
  const userId = req.user._id;

  // If date parameter is not provided, use today's date
  const currentDate = date ? new Date(date) : new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];

  let waterIntake = await UserWaterIntake.findOne({
    userId,
    date: formattedDate,
  });

  if (waterIntake) {
    // If water intake exists for the specified date, update it
    waterIntake.litersDrank = litersDrank;

    const updatedWaterIntake = await waterIntake.save();
    res.status(200).json(updatedWaterIntake);
  } else {
    // If water intake doesn't exist for the specified date, create a new one
    waterIntake = new UserWaterIntake({
      userId,
      date: formattedDate,
      litersDrank,
    });

    const newWaterIntake = await waterIntake.save();
    res.status(201).json(newWaterIntake);
  }
});


// @desc        Get user's water intake for a specific date
// route        GET /api/users/water-intake/:date
// @access      Private
const getUserWaterIntake = asyncHandler(async (req, res) => {
  const { date } = req.params;
  const userId = req.user._id;

  const startOfDay = new Date(date);
  startOfDay.setUTCHours(0, 0, 0, 0);

  const endOfDay = new Date(date);
  endOfDay.setUTCHours(23, 59, 59, 999);

  const waterIntake = await UserWaterIntake.findOne({
    userId,
    date: { $gte: startOfDay, $lte: endOfDay },
  });

  if (waterIntake) {
    res.json(waterIntake);
  } else {
    res.json({ litersDrank: 0 });
  }
});

export { logWaterIntake, updateWaterIntake, getUserWaterIntake };
