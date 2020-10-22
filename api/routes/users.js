const express = require("express");
const { User } = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello World");
});

router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  await user.save();
  res.send(user);
});

module.exports = router;
