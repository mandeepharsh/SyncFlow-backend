const express = require('express');
const router = express.Router();
const {getMaterialsWorkoder, getMaterials ,updateMaterialQuantity ,updateMaterialStatus,updateMaterialLocation} = require("../controllers/materialsController");


router.get("/:workOrderId", getMaterialsWorkoder)
router.get("/", getMaterials)
router.put("/:id", updateMaterialStatus)
router.patch("/:id",updateMaterialLocation)
router.post("/:id",updateMaterialQuantity)


module.exports = router;