const express = require("express");
const { createService, getServiceController, deleteServiceController, updateServiceController } = require("../controller/service.controller");
const router = express.Router();


router.post("/create", createService);
router.get("/all", getServiceController);
router.delete("/delete/:serviceId", deleteServiceController);
router.put("/update/:serviceId", updateServiceController);

 

module.exports = router;
