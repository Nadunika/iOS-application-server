const User = require("../models/userModel.js");

const createUser = async (req, res) => {
  //res.send("WORKING");
  try {
    let body = req.body;
    let result = await new User(body).save();
    res.send({ message: "success", res: result });
  } catch (e) {
    res.status(500).send({ message: "failed" });
  }
};

const login = async (req, res) => {
  //res.send("GET WORKING");
  try {
    const { email, password } = req.body;
    let result = await User.findOne({ email, password });
    if (!result) return res.status(401).send({ message: "Unauthorized" });
    res
      .status(401)
      .send({
        message: "Success!",
        first_name: result.first_name,
        last_name: result.last_name,
        id: result.id
      });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "failed" });
  }
};

module.exports = { createUser, login };
