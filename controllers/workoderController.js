const knex = require("knex")(require("../knexfile"));

const getWorkoders = async (req, res) => {
  const { employee__role, employee_id } = req.body
  try {
    const workOrders = await knex('workorderemployee')
      .join('workorder', 'workorder.work_order_id', 'workorderemployee.work_order_id')
      .join('employee', 'employee.employee_id', 'workorderemployee.employee_id')
      .select('*');
    if (workOrders.length === 0) {
      return res.status(400).json({
        message: 'Work order details are empty',
      });
    }
    
    function customizeArray(originalArray) {
      var resultMap = new Map();

      originalArray.forEach(function (obj) {
        if (resultMap.has(obj.work_order_id)) {
          var existingObj = resultMap.get(obj.work_order_id);
          existingObj.employee_name += ', ' + obj.employee_name;
        } else {
          resultMap.set(obj.work_order_id, obj);
        }
      });

      return Array.from(resultMap.values());
    }

   
    if (employee__role === "welder") {
      const customizedWorkOrders = customizeArray(workOrders);
      const filterdArray = customizedWorkOrders.filter((orders) => orders.employee_id === Number(employee_id))
      return res.status(200).json(filterdArray);
    }else {
      const customizedWorkOrders = customizeArray(workOrders);
      return res.status(200).json(customizedWorkOrders);
    }
  } catch (err) {
    res.status(500).json({
      err: 'Internal server error',
    });
  }
};


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
          existingObj.employee_name += `, ${obj.employee_name}`;
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

const getPendingWorkOrders = async (_req, res) => {
  try {
    const workOrders = await knex("workorder")
      .where({ "job_started": 0 })
      .select('*');
    if (workOrders.length === 0) {
      return res.status(200).json([]);
    }
    res.status(200).json(workOrders)
  } catch (error) {

    res.json(error)
  }
}

const startWorkOrder = async (req, res) => {
  try {
    await knex('workorder')
      .where('work_order_id', req.body.work_order_id)
      .update({ job_started: true });

    const workOrderEmployeeExists = await knex('workorderemployee')
      .where({
        work_order_id: req.body.work_order_id,
        employee_id: req.body.employee_id
      })
      .first();

    if (!workOrderEmployeeExists) {
      await knex('workorderemployee').insert({
        work_order_id: req.body.work_order_id,
        employee_id: req.body.employee_id
      });
    }

    res.json("updated")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating work order" });
  }
}


module.exports = {
  getWorkoders,
  getOneWorkoder,
  getPendingWorkOrders, startWorkOrder
};