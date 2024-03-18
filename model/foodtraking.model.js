const mongoose = require("mongoose");

const foodTracking = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    food: {
      type: Schema.Types.ObjectId,
      ref: "food",
    },
    date: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

const foodTrackingModel = mongoose.model("tracking", foodTracking);
module.exports = foodTrackingModel;
