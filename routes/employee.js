const express = require("express");
const {
  getEmployees,
  getUserInfo,
} = require("../controllers/employeeController");
const { authorize } = require("../middleware/authorize");
const { handleLogin } = require("../controllers/authController");
const router = express.Router();

router.get("/", getEmployees);
router.post("/login", handleLogin);
router.get("/userInfo", authorize, getUserInfo);

module.exports = router;
