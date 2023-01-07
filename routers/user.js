const express = require("express");
const { createUser, login } = require("../controllers/userController.js");
//const authenticate = require("../middleware/authenticate.js");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);

module.exports = router;

