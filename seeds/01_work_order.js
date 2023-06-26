exports.seed = function(knex) {
  return knex('WorkOrder').del()
    .then(function () {
      return knex('WorkOrder').insert([
        {work_order_id: 1, workorder_Number: 'KO-0010', project_name: 'Komatsu Excavator Repairs', client_name: 'Komatsu Ltd.', details: 'Repair and welding of excavator arms', job_started: true},
        {work_order_id: 2, workorder_Number: 'NA-0020', project_name: 'Submarine Gearbox Manufacturing', client_name: 'Navy Department', details: 'Welding and assembly of submarine gearboxes', job_started: true},
        {work_order_id: 3, workorder_Number: 'PR-0030', project_name: 'Stainless Kitchen', client_name: 'Premium Restaurants LLC', details: 'Welding of stainless steel appliances', job_started: true},
        {work_order_id: 4, workorder_Number: 'CI-0040', project_name: 'Office Building Construction', client_name: 'City Council', details: 'Welding of structural steel beams', job_started: true},
        {work_order_id: 5, workorder_Number: 'ST-0050', project_name: 'Stargate Dump Trailer', client_name: 'Stargate Manufacturing', details: 'Construction and welding of dump trailers', job_started: true},
        {work_order_id: 6, workorder_Number: 'ST-0060', project_name: 'Stargate Live Bottom Trailer', client_name: 'Stargate Manufacturing', details: 'Manufacturing and welding of live bottom trailers', job_started: true},
        {work_order_id: 7, workorder_Number: 'IN-0070', project_name: 'Three Screw Pump', client_name: 'Industrial Pumps Co.', details: 'Assembly and welding of screw pump components', job_started: true},
        {work_order_id: 8, workorder_Number: 'GE-0080', project_name: 'Wind Turbine Installation', client_name: 'General Electric', details: 'Installation and welding of wind turbines', job_started: false},
        {work_order_id: 9, workorder_Number: 'BO-0090', project_name: 'Commercial Aircraft Repairs', client_name: 'Boeing', details: 'Repair and welding of commercial aircraft parts', job_started: false},
      ]);
    });
};
