const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authUser");

router.get("/", authenticateUser, (request, response) => {
  const FindAllPets = await;
});
module.exports = router;
