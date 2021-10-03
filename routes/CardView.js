const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authUser");
const { PetModel } = require("../models/PetDetails");
const _ = require("lodash");

router.get("/", authenticateUser, async (request, response) => {
  const FindAllPets = await PetModel.find();

  var cardViewsAttributes = [];

  FindAllPets.forEach((pet) => {
    cardViewsAttributes.push(
      _.pick(pet, ["_id", "Image", "Name", "Age", "Breed", "Gender"])
    );
  });
  response.status(200).send(cardViewsAttributes);
});

router.get("/:selectedPetId", authenticateUser, async (request, response) => {
  const SelectedPetExpandedView = await PetModel.find({
    _id: request.params.selectedPetId,
  });
  if (!SelectedPetExpandedView) {
    return response.status(400).send("Details not available");
  }

  response.status(200).send(SelectedPetExpandedView);
});
module.exports = router;
