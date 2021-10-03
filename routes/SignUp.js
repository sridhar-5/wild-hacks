const express = require("express");
const router = express.Router();
const { user } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (request, response) => {
  const CheckifUserAlreadyRegistered = await user.findOne({
    username: request.body.username,
  });

  if (CheckifUserAlreadyRegistered) {
    return response
      .status(400)
      .send("User already registered..! Please try logging in");
  }

  const CreateANewUser = new user({
    Name: request.body.Name,
    email: request.body.email,
    username: request.body.username,
    password: request.body.password,
    phone: request.body.phone,
  });

  //10 rounds of salting
  const salt = await bcrypt.genSalt(10);
  const HashedPasswordCreation = await bcrypt.hash(
    CreateANewUser.password,
    salt
  );

  //re -assigning the password
  CreateANewUser.password = HashedPasswordCreation;

  //saving to the database
  var savedInstance = await CreateANewUser.save();

  //responsding to the user
  response.status(200).send("Registration successful.. Please Login.");
});

module.exports = router;
