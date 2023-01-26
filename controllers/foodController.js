const Food = require("../models/foodModel.js");
const Wishlist = require("../models/wishlistModel");

//get all
const getAllFood = async (req, res) => {
  try {
    let result = await Recipe.find();
    res.send(result);
  } catch (e) {
    res.status(500).send({ message: "failed" });
  }
};

const getById = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Recipe.findOne({ _id: id });
    res.send(result);
  } catch (e) {
    res.status(500).send({ message: "failed" });
  }
};

const create = async (req, res) => {
  try {
    let body = req.body;
    let result = await new Recipe(body).save();
    res.send({ message: "success", res: result });
  } catch (e) {
    res.status(500).send({ message: "failed" });
  }
};

// const deleteById = async (req, res) => {
//   try {
//     let id = req.params.id;
//     let result = await Recipe.deleteOne({ _id: id });
//     res.send(result);
//   } catch (e) {
//     res.status(500).send({ message: "failed" });
//   }
// };

module.exports = { getAllFood, getById, create };
