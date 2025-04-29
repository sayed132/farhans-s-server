const express = require("express");
const { createEducation, getAllEduController, updateEduController, deleteEduController } = require("../controller/edu.controller");
const router = express.Router();

router.post("/create", createEducation);
router.get("/all", getAllEduController);
router.put("/update/:eduId", updateEduController);
router.delete("/delete/:eduId", deleteEduController);

module.exports = router;
