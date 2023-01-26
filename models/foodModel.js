const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true },
    ingredients: { type: String, required: true },
    nutrition: { type: String, required: true },
    calorie_count: { type: String, required: true },
    category: { type: String, required: true}
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
