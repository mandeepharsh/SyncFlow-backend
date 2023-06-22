const express = require('express');
const router = express.Router();
const {getMaterialsWorkoder, getMaterials ,updateMaterialStatus,updateMaterialLocation} = require("../controllers/materialsController");


router.get("/:workOrderId", getMaterialsWorkoder)
router.get("/", getMaterials)
router.put("/:id", updateMaterialStatus)
router.patch("/:id",updateMaterialLocation)



module.exports = router;