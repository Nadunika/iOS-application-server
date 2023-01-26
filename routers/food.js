const express = require("express");
const { getAllFood, getById, create } = require("../controllers/foodController.js");

const router = express.Router();

router.post("/", create);
router.get("/", getAllFood);
router.get("/:id", getById);
// router.delete("/:id", deleteById);

module.exports = router;
