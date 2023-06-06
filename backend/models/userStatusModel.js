import mongoose from "mongoose";

const statusSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  goalWeight: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    validate: {
      validator: function (value) {
        return /^(male|female)$/i.test(value); // case-insensitive validation
      },
      message: "Gender must be either 'Male' or 'Female'.",
    },
    required: true,
  },
  activityLevel: {
    type: String,
    enum: ["sedentary", "lightlyActive", "active", "veryActive"],
    required: true,
  },
  goal: {
    type: String,
    enum: ["Maintenance", "Cutting", "Bulking"],
    required: true,
  },
});

const Status = mongoose.model("Status", statusSchema);

export default Status;
