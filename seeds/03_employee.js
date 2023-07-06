const bcrypt =  require('bcrypt');
const saltRounds = 10;
 

exports.seed = async function  (knex) {
  await knex('Employee').del()
  await knex('Employee').insert([
        { employee_id: 1, employee_name: 'John Doe', employee_number: 'E-001', employee__role: 'welder' },
        { employee_id: 2, employee_name: 'Jane Smith', employee_number: 'E-002', employee__role: 'welder' },
        { employee_id: 3, employee_name: 'Bob Johnson', employee_number: 'E-003', employee__role: 'welder' },
        { employee_id: 4, employee_name: 'Mary Williams', employee_number: 'E-004', employee__role: 'welder' },
        { employee_id: 5, employee_name: 'James Brown', employee_number: 'E-005', employee__role: 'welder' },
        { employee_id: 6, employee_name: 'Patricia Davis', employee_number: 'E-006', employee__role: 'welder' },
        { employee_id: 7, employee_name: 'Robert Miller', employee_number: 'E-007', employee__role: 'welder' },
        { employee_id: 8, employee_name: 'Linda Wilson', employee_number: 'E-008', employee__role: 'welder' },
        { employee_id: 9, employee_name: 'James Carter', employee_number: 'E-009', employee__role: 'material handler' }
      ]);
         
      const hashedPasswords = await Promise.all([
        bcrypt.hash("Password@123",saltRounds), 
        bcrypt.hash("Password@123",saltRounds), 
        bcrypt.hash("Password@123",saltRounds), 
        bcrypt.hash("Password@123",saltRounds), 
        bcrypt.hash("Password@123",saltRounds), 
        bcrypt.hash("Password@123",saltRounds), 
        bcrypt.hash("Password@123",saltRounds), 
        bcrypt.hash("Password@123",saltRounds), 
        bcrypt.hash("Password@123",saltRounds) 
      ]);


       await knex('Users').del()
       await  knex('Users').insert([
            { user_id: 1, user_username: 'E-001', user_hashedPassword: hashedPasswords[0], employee_id: 1 },
            { user_id: 2, user_username: 'E-002', user_hashedPassword: hashedPasswords[1], employee_id: 2 },
            { user_id: 3, user_username: 'E-003', user_hashedPassword: hashedPasswords[2], employee_id: 3 },
            { user_id: 4, user_username: 'E-004', user_hashedPassword: hashedPasswords[3], employee_id: 4 },
            { user_id: 5, user_username: 'E-005', user_hashedPassword: hashedPasswords[4], employee_id: 5 },
            { user_id: 6, user_username: 'E-006', user_hashedPassword: hashedPasswords[5], employee_id: 6 },
            { user_id: 7, user_username: 'E-007', user_hashedPassword: hashedPasswords[6], employee_id: 7 },
            { user_id: 8, user_username: 'E-008', user_hashedPassword: hashedPasswords[7], employee_id: 8 },
            { user_id: 9, user_username: 'E-009', user_hashedPassword: hashedPasswords[8], employee_id: 9 },
          ]);
        };
