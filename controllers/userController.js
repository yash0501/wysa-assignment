const mongoose = require("mongoose");
const { User } = require("../models");
const bcrypt = require("bcrypt");

const userController = {
  async registerUser(req, res) {
    try {
      const { userName, password } = req.body;

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new User({
        userName,
        password: hashedPassword,
      });
      const savedUser = await newUser.save();
      res.status(200).json({
        status: "success",
        data: savedUser,
        message: "User registered successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
