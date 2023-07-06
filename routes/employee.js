const express = require('express');
const { getEmployees, userLogin } = require('../controllers/employeeController');
const router = express.Router();


router.get("/",getEmployees)
router.post("/login", userLogin)


module.exports = router;