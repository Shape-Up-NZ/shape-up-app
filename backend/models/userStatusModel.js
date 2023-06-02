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
    enum: ["male", "female"],
    required: true,
  },
  activityLevel: {
    type: String,
    enum: ["sedentary", "lightlyActive", "active", "veryActive"],
    required: true,
  },
});

const Status = mongoose.model("Status", statusSchema);

export default Status;