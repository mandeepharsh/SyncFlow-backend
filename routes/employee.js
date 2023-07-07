const express = require('express');
const { getEmployees, userLogin, userInfo } = require('../controllers/employeeController');
const { authorize } = require('../middleware/authorize');
const router = express.Router();


router.get("/",getEmployees)
router.post("/login", userLogin)



module.exports = router;