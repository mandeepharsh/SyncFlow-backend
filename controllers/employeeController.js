const knex = require("knex")(require("../knexfile"));

const getEmployees = async(_req,res) =>{
    try {
        const table =  await knex("employee")
        if(table.lentgh === 0){
        res.status(400).json("Employees not found")
        }
        res.status(200).json(table)
        
    } catch (error) {
        res.status(500).json("Internal server erro")
    }
    }
    
module.exports={
 getEmployees
}