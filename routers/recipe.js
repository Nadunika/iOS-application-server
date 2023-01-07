const express = require("express");
const { getAllRecipe, getById, create } = require("../controllers/recipeController.js");

const router = express.Router();

router.post("/", create);
router.get("/", getAllRecipe);
router.get("/:id", getById);
// router.delete("/:id", deleteById);

module.exports = router;
