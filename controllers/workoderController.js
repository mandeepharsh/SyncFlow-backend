const knex = require("knex")(require("../knexfile"));

const getWorkoders = (req,res) =>{
   knex("workorderemployee")
   .join('workorder','workorder.work_order_id','workorderemployee.work_order_id')
   .join('employee','employee.employee_id', " workorderemployee.employee_id")
   .select("*")
   .then((workOders)=>{
     if(workOders.length === 0){
        return res.status(400).json({
            'message' : 'workoeorder details are empty'
        })
     }
   res.status(200).json(workOders)
   })
   .catch((err) =>{
    res.status(500).json({
        'err' : "internal server error"
    })
   })
} 


const getOneWorkoder = (req,res) =>{
    knex("workorderemployee")
    .join('workorder','workorder.work_order_id','workorderemployee.work_order_id')
    .join('employee','employee.employee_id', " workorderemployee.employee_id")
    .where('workorder.work_order_id', req.params.id)
    .then((workOders)=>{
    
      if(workOders.length === 0){
         return res.status(400).json({
             'message' : 'workoeorder not found' 
         })
         
      }
    res.status(200).json(workOders)
    })
    .catch((err) =>{
        console.log(err)
     res.status(500).json({
         'err' : "internal server error"
     })
    })
}

module.exports = {
    getWorkoders,
    getOneWorkoder
  };