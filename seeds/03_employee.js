exports.seed = function(knex) {
    return knex('Employee').del()
      .then(function () {
        return knex('Employee').insert([
          {employee_id: 1, employee_name: 'John Doe', employee_number: 'E-001'},
          {employee_id: 2, employee_name: 'Jane Smith', employee_number: 'E-002'},
          {employee_id: 3, employee_name: 'Bob Johnson', employee_number: 'E-003'},
          {employee_id: 4, employee_name: 'Mary Williams', employee_number: 'E-004'},
          {employee_id: 5, employee_name: 'James Brown', employee_number: 'E-005'},
          {employee_id: 6, employee_name: 'Patricia Davis', employee_number: 'E-006'},
          {employee_id: 7, employee_name: 'Robert Miller', employee_number: 'E-007'},
          {employee_id: 8, employee_name: 'Linda Wilson', employee_number: 'E-008'},
        ]);
      });
  };