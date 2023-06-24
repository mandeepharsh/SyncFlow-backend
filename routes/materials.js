const express = require('express');
const router = express.Router();
const {getMaterialsWorkoder,
        getMaterials ,
        updateMaterialQuantity,
        updateMaterialStatus,
        updateMaterialLocation,
        getIssuedMaterial} = require("../controllers/materialsController");


router.get("/:workOrderId", getMaterialsWorkoder)
router.get("/", getMaterials)
router.put("/:id", updateMaterialStatus)
router.patch("/:id",updateMaterialLocation)
router.post("/:id",updateMaterialQuantity)

router.get("/material/issued",getIssuedMaterial);

module.exports = router;