const Food = require("../models/foodModel.js");
const { where } = require("../models/wishlistModel");
const Wishlist = require("../models/wishlistModel");

//get all
const getAllFood = async (req, res) => {
  try {
    let result = await Food.find();
    res.send(result);
  } catch (e) {
    res.status(500).send({ message: "failed" });
  }
};

//get popular food
const getPopularFood = async (req, res) => {
  try {
    let result = await Food.find().sort([["rating", "desc"]]).limit(5);
    res.send(result);
  } catch (e) {
    res.status(500).send({ message: "failed" });
  }
};

//get breakfast food
const getBreakfastFood = async (req, res) => {
  try {
    let result = await Food.find({category:"Breakfast"});
    res.send(result);
  } catch (e) {
    res.status(500).send({ message: "failed" });
  }
};

//get lunch food
const getLunchFood = async (req, res) => {
  try {
    let result = await Food.find({category:"Lunch"});
    res.send(result);
  } catch (e) {
    res.status(500).send({ message: "failed" });
  }
};


//get dinner food
const getDinnerFood = async (req, res) => {
  try {
    let result = await Food.find({category:"Dinner"});
    res.send(result);
  } catch (e) {
    res.status(500).send({ message: "failed" });
  }
};

//get dessert food
const getDessertFood = async (req, res) => {
  try {
    let result = await Food.find({category:"Dessert"});
    res.send(result);
  } catch (e) {
    res.status(500).send({ message: "failed" });
  }
};


const getById = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Food.findOne({ _id: id });
    res.send(result);
  } catch (e) {
    res.status(500).send({ message: "failed" });
  }
};

const getByName = async (req, res) => {
  try {
    let name = req.params.name;
    let result = await Food.find({ name: name});
    res.send(result);
  } catch (e) {
    res.status(500).send({ message: "failed",e});
  }
};

const create = async (req, res) => {
  try {
    let body = req.body;
    let result = await new Food(body).save();
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

module.exports = { getAllFood, getById, create, getPopularFood, getBreakfastFood, getLunchFood, getDinnerFood, getDessertFood, getByName};
