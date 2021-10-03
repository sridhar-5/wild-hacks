const mongoose = require("mongoose");

const PetSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  Age: {
    type: Number,
    required: true,
    max: 100,
  },
  Breed: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  Image: {
    type: String,
    required: true,
    minlength: 5,
  },
  Gender: {
    type: String,
    required: true,
    minlength: 5,
  },
  Vaccination_status: {
    type: Boolean,
    default: false,
  },
  Misc: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const PetModel = mongoose.model("pet-detail", UserSchema);

module.exports = {
  PetModel,
};
