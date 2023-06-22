const express = require("express");
const router = express.Router();
const {getLocations,getLocationMaterials} = require("../controllers/locationController")


router.get("/",getLocations)
router.get("/materials/:location",getLocationMaterials)



module.exports = router;