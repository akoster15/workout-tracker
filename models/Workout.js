const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: true
    },
    name: {
      type: String,
      unique: true,
      required: true
    },

    duration: {
      type: Number,
      unique: true,
      required: true
    },
    weight: {
      type: Number,
      unique: true,
      required: true
    },
    reps: {
      type: Number,
      unique: true,
      required: true
    },
    sets: {
      type: Number,
      unique: true,
      required: true
    }
  }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;