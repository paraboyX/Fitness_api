const mongoose = require("mongoose");

const foodSchema = mongoose.Schema(
  {
    food: {
      type: String,
      required: [true, "can't be blank"],
    },
  },
  { timestamps: true }
);

const foodModel = mongoose.model("food", foodSchema);
module.exports = foodModel;
