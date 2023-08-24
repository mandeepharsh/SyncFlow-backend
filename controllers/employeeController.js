const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require("knex")(require("../knexfile"));
require('dotenv').config();
const getEmployees = async (_req, res) => {
    try {
        const table = await knex("employee")
        if (table.lentgh === 0) {
            res.status(400).json("Employees not found")
        }
        res.status(200).json(table)

    } catch (error) {
        res.status(500).json("Internal server error")
    }
}

const userLogin = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({
            msg: "username and password are required"
        })
    }

    try {
        const table = await knex("users")
            .join('employee', 'employee. employee_id', 'users.employee_id')
            .where({user_username: username})
        if (table.length === 0) {
            return res.status(404).json({ msg: "Invalid credentials" });
        }
         
        let user = table[0]
        const match = await bcrypt.compare(password, user.user_hashedPassword);

        if (!match) {
         return    res.status(401).json({
                msg: "Invalid credentials"
            })
        }
        const token = jwt.sign(
            {
                employee_id: user.employee_id,
                employee__role: user.employee__role,
                employee_name : user.employee_name
            },
            process.env.SECRET_KEY,
            {
                expiresIn: 60 * 60 * 24
            }
        )
      
       res.json({token}) 

    } catch (error) {
      res.status(500).json({
        error : error,
        msg: "internal server error"
      })
    }
}

const getUserInfo = (req,res) =>{
  const employee_id  = req.employee_id;
  const employee__role =  req.employee__role;
  const employee_name = req.employee_name ; 
  res.status(200).json({
    employee_id : employee_id,
    employee__role : employee__role,
    employee_name : employee_name
  })

}



module.exports = {
    getEmployees,
    userLogin,
    getUserInfo

}