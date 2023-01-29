const express = require("express");
const { getAllFood, getById, create, getPopularFood, getBreakfastFood, getLunchFood, getDinnerFood, getByName } = require("../controllers/foodController.js");

const router = express.Router();

router.post("/", create);
router.get("/", getAllFood);
router.get("/popular", getPopularFood);
router.get("/breakfast", getBreakfastFood);
router.get("/lunch", getLunchFood);
router.get("/dinner", getDinnerFood);
router.get("/:id", getById);
router.get("/name/:name", getByName);
// router.delete("/:id", deleteById);

module.exports = router;
