const express = require("express");
const router = express.Router();
const {
  getMaterialsWorkoder,
  getMaterials,
  updateMaterialQuantity,
  updateMaterialStatus,
  updateMaterialLocation,
  getIssuedMaterial,
} = require("../controllers/materialsController");

router.route("/").get(getMaterials);

router
  .route("/:id")
  .put(updateMaterialStatus)
  .patch(updateMaterialLocation)
  .post(updateMaterialQuantity);

router.get("/:workOrderId", getMaterialsWorkoder);

router.get("/material/issued", getIssuedMaterial);

module.exports = router;
