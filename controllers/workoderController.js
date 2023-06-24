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
     function customizeArray(originalArray) {
        var resultMap = new Map();
      
        originalArray.forEach(function(obj) {
          if (resultMap.has(obj.work_order_id)) {
            var existingObj = resultMap.get(obj.work_order_id);
            existingObj.employee_name += ", " + obj.employee_name;
          } else {
            resultMap.set(obj.work_order_id, obj);
          }
        });
      
        return Array.from(resultMap.values());
      }  
   res.status(200).json(customizeArray(workOders))
   })
   .catch((err) =>{
    res.status(500).json({
        'err' : "internal server error"
    })
   })
} 


const getOneWorkoder = async (req, res) => {
  try {
    const workOders = await knex('workorderemployee')
      .join('workorder', 'workorder.work_order_id', 'workorderemployee.work_order_id')
      .join('employee', 'employee.employee_id', 'workorderemployee.employee_id')
      .where('workorder.work_order_id', req.params.id);

    if (workOders.length === 0) {
      return res.status(400).json({
        message: 'Work order not found',
      });
    }

    function customizeArray(originalArray) {
      const result = [];

      originalArray.forEach((obj) => {
        const existingObj = result.find((item) => item.jobNumber === obj.jobNumber);

        if (existingObj) {
          existingObj.employee_name    += `, ${obj.employee_name          }`;
        } else {
          result.push(obj);
        }
      });

      return result;
    }

    const customizedWorkOders = customizeArray(workOders);

    res.status(200).json(customizedWorkOders);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      err: 'Internal server error',
    });
  }
};

module.exports = {
    getWorkoders,
    getOneWorkoder
  };