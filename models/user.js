const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const UserSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  username: {
    type: String,
    required: true,
    minlength: 16,
    maxlength: 16,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 250,
  },
  email: {
    type: String,
    required: true,
    //can add a regex here to match
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
});

//method to create jwt token
UserSchema.methods.GenerateJwtToken = function () {
  const token = jwt.sign(
    { _id: this._id, username: this.username },
    process.env.JWT_SECRET_KEY
  );
  return token;
};

const User = mongoose.model("user", UserSchema);

module.exports = {
  user: User,
};
