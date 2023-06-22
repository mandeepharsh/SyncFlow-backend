const express = require('express');
const router = express.Router();
const {getMaterialsWorkoder, getMaterials ,updateMaterialStatus} = require("../controllers/materialsController");


router.get("/:workOrderId", getMaterialsWorkoder)
router.get("/", getMaterials)
router.put("/:id", updateMaterialStatus)




module.exports = router;