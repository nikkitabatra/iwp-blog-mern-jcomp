const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    console.log(req.body.password);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    //console.log(user);
    if(!user) return res.status(401).json("Wrong credentials for username!");

    bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
      if (err) {
        throw err
      } else if (!isMatch) {
        return res.status(401).json("Wrong credentials for password!");
      } else {
        return res.status(200).json(user)
      }
    })
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;