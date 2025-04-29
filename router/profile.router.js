const express = require("express");
const { createProfile, getProfileController, updateProfileController } = require("../controller/profile.controller");

const router = express.Router();


router.post("/create", createProfile);
router.get("/", getProfileController);
router.put("/:id", updateProfileController);

 

module.exports = router;
