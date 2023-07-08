const express = require('express');
const { getEmployees, userLogin,  getUserInfo } = require('../controllers/employeeController');
const { authorize } = require('../middleware/authorize');
const router = express.Router();


router.get("/",getEmployees)
router.post("/login", userLogin)
router.get("/userInfo", authorize, getUserInfo)



module.exports = router;