const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    foodId: { type: String, required: true },
  },
  { timestamps: true }
);

const Wishlist = mongoose.model("Wishlist", schema);
module.exports = Wishlist;
