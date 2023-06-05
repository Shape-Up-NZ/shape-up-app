import mongoose from "mongoose";

const userWaterIntakeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  litersDrank: {
    type: Number,
    required: true
  }
});

const UserWaterIntake = mongoose.model('UserWaterIntake', userWaterIntakeSchema);

export default UserWaterIntake;

