const express = require('express');
const router = express.Router();
require("dotenv").config();
const {getMaterialsWorkoder, getMaterials ,updateMaterialStatus} = require("../controllers/materialsController");


router.get("/:workOrderId", getMaterialsWorkoder)

router.get("/", getMaterials)


router.put("/:id", updateMaterialStatus)




module.exports = router;