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
      function customizeArray(originalArray) {
  var result = [];

  originalArray.forEach(function(obj) {
    var existingObj = result.find(function(item) {
      return item.jobNumber === obj.jobNumber;
    });

    if (existingObj) {
      existingObj.employeeName += ", " + obj.employeeName;
    } else {
      result.push(obj);
    }
  });

  return result;
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