const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { user } = require("../models/user");

router.post("/", async (request, response) => {
  //check the database for the user
  const CheckUser = await user.findOne({ username: request.body.username });

  //if user record is not available then responds as a bad request
  if (!CheckUser) {
    return response.status(400).send("Invalid Username or Password");
  }
  //check if entered password and user password is same
  const PasswordCheck = await bcrypt.compare(
    request.body.password,
    CheckUser.password
  );
  //wrong password
  if (!PasswordCheck) {
    return response.status(400).send("Invalid Username or Password");
  }

  //if both entered username and password are correct then generating a jwt token

  const token = CheckUser.GenerateJwtToken();
  response.header("user-auth-token", token).status(200).send(token);
});
module.exports = router;
