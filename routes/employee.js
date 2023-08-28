const express = require("express");
const {
  getEmployees,
  getUserInfo,
} = require("../controllers/employeeController");
const { authorize } = require("../middleware/authorize");
const router = express.Router();

router.get("/", authorize, getEmployees);
router.get("/userInfo", authorize, getUserInfo);

module.exports = router;
