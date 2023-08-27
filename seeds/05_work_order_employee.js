exports.seed = function (knex) {
  return knex("WorkOrderEmployee")
    .del()
    .then(function () {
      return knex("WorkOrderEmployee").insert([
        { work_order_id: 1, employee_id: 1 },
        { work_order_id: 1, employee_id: 2 },
        { work_order_id: 2, employee_id: 3 },
        { work_order_id: 2, employee_id: 4 },
        { work_order_id: 3, employee_id: 5 },
        { work_order_id: 3, employee_id: 6 },
        { work_order_id: 4, employee_id: 7 },
        { work_order_id: 4, employee_id: 2 },
        { work_order_id: 5, employee_id: 8 },
        { work_order_id: 6, employee_id: 1 },
      ]);
    });
};
