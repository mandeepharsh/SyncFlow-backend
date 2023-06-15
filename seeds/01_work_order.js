exports.seed = function(knex) {
    return knex('WorkOrder').del()
      .then(function () {
        return knex('WorkOrder').insert([
          {work_order_id: 1, workoder_Number: 'WO-001', project_name: 'Komatsu Excavator Repairs', client_name: 'Komatsu Ltd.', details: 'Repair and welding of excavator arms'},
          {work_order_id: 2, workoder_Number: 'WO-002', project_name: 'Submarine Gearbox Manufacturing', client_name: 'Navy Department', details: 'Welding and assembly of submarine gearboxes'},
          {work_order_id: 3, workoder_Number: 'WO-003', project_name: 'Stainless Kitchen', client_name: 'Premium Restaurants LLC', details: 'Welding of stainless steel appliances'},
          {work_order_id: 4, workoder_Number: 'WO-004', project_name: 'Office Building Construction', client_name: 'City Council', details: 'Welding of structural steel beams'},
          {work_order_id: 5, workoder_Number: 'WO-005', project_name: 'Stargate Dump Trailer', client_name: 'Stargate Manufacturing', details: 'Construction and welding of dump trailers'},
          {work_order_id: 6, workoder_Number: 'WO-006', project_name: 'Stargate Live Bottom Trailer', client_name: 'Stargate Manufacturing', details: 'Manufacturing and welding of live bottom trailers'},
          {work_order_id: 7, workoder_Number: 'WO-007', project_name: 'Three Screw Pump', client_name: 'Industrial Pumps Co.', details: 'Assembly and welding of screw pump components'},
        ]);
      });
  };