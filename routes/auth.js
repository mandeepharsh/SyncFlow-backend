const express = require("express");
const router = express.Router();
const { handleLogin } = require("../controllers/authController");

console.log("auth.js");
router.post("/", handleLogin);

module.exports = router;
