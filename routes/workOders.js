const express = require("express");
const router = express.Router();
const {getWorkoders , getOneWorkoder, getPendingWorkOrders, startWorkOrder} = require("../controllers/workoderController");
const { authorize } = require("../middleware/authorize");

router
.route("/")
.get(authorize, getWorkoders)
.post(startWorkOrder)
router.get("/:id/workoder",getOneWorkoder);
router.get("/pending",getPendingWorkOrders);


module.exports = router;