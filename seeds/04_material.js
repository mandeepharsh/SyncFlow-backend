exports.seed = function(knex) {
    return knex('Material').del()
      .then(function () {
        return knex('Material').insert([
          // Materials for WorkOrder 1
          {material_id: 1, material_number: 'M-001', quantity: 10, size: '2x4', status: 'received', receive_date: '2023-01-02', work_order_id: 1, location_id: 1},
          {material_id: 2, material_number: 'M-002', quantity: 15, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 1, location_id: 2},
          {material_id: 3, material_number: 'M-003', quantity: 8, size: '3x3', status: 'received', receive_date: '2023-01-05', work_order_id: 1, location_id: 1},
          {material_id: 4, material_number: 'M-004', quantity: 6, size: '2x2', status: 'received', receive_date: '2023-01-05', work_order_id: 1, location_id: 1},
          {material_id: 5, material_number: 'M-005', quantity: 12, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 1, location_id: 2},
          {material_id: 6, material_number: 'M-006', quantity: 4, size: '2x2', status: 'received', receive_date: '2023-01-05', work_order_id: 1, location_id: 1},
          {material_id: 7, material_number: 'M-007', quantity: 10, size: '4x4', status: 'received', receive_date: '2023-01-05', work_order_id: 1, location_id: 1},
          {material_id: 8, material_number: 'M-008', quantity: 8, size: '3x3', status: 'in-transit', receive_date: null, work_order_id: 1, location_id: 2},
          {material_id: 9, material_number: 'M-009', quantity: 6, size: '2x2', status: 'received', receive_date: '2023-01-05', work_order_id: 1, location_id: 1},
          {material_id: 10, material_number: 'M-010', quantity: 15, size: '4x4', status: 'received', receive_date: '2023-01-05', work_order_id: 1, location_id: 1},
  
          // Materials for WorkOrder 2
          {material_id: 11, material_number: 'M-011', quantity: 4, size: '2x2', status: 'received', receive_date: '2023-01-03', work_order_id: 2, location_id: 1},
          {material_id: 12, material_number: 'M-012', quantity: 10, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 2, location_id: 2},
          {material_id: 13, material_number: 'M-013', quantity: 8, size: '3x3', status: 'received', receive_date: '2023-01-05', work_order_id: 2, location_id: 1},
          {material_id: 14, material_number: 'M-014', quantity: 6, size: '2x2', status: 'received', receive_date: '2023-01-05', work_order_id: 2, location_id: 1},
          {material_id: 15, material_number: 'M-015', quantity: 12, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 2, location_id: 2},
          {material_id: 16, material_number: 'M-016', quantity: 4, size: '2x2', status: 'received', receive_date: '2023-01-05', work_order_id: 2, location_id: 1},
          {material_id: 17, material_number: 'M-017', quantity: 10, size: '4x4', status: 'received', receive_date: '2023-01-05', work_order_id: 2, location_id: 1},
          {material_id: 18, material_number: 'M-018', quantity: 8, size: '3x3', status: 'in-transit', receive_date: null, work_order_id: 2, location_id: 2},
          {material_id: 19, material_number: 'M-019', quantity: 6, size: '2x2', status: 'received', receive_date: '2023-01-05', work_order_id: 2, location_id: 1},
          {material_id: 20, material_number: 'M-020', quantity: 15, size: '4x4', status: 'received', receive_date: '2023-01-05', work_order_id: 2, location_id: 1},
        
          // Materials for WorkOrder 3
          {material_id: 23, material_number: 'M-023', quantity: 6, size: '2x2', status: 'received', receive_date: '2023-02-05', work_order_id: 3, location_id: 1},
          {material_id: 24, material_number: 'M-024', quantity: 10, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 3, location_id: 2},
          {material_id: 25, material_number: 'M-025', quantity: 8, size: '3x3', status: 'received', receive_date: '2023-02-05', work_order_id: 3, location_id: 1},
          {material_id: 26, material_number: 'M-026', quantity: 6, size: '2x2', status: 'received', receive_date: '2023-02-05', work_order_id: 3, location_id: 1},
          {material_id: 27, material_number: 'M-027', quantity: 12, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 3, location_id: 2},
          {material_id: 28, material_number: 'M-028', quantity: 8, size: '3x3', status: 'received', receive_date: '2023-02-05', work_order_id: 3, location_id: 1},
          {material_id: 29, material_number: 'M-029', quantity: 6, size: '2x2', status: 'received', receive_date: '2023-02-05', work_order_id: 3, location_id: 1},
          {material_id: 30, material_number: 'M-030', quantity: 15, size: '4x4', status: 'received', receive_date: '2023-02-05', work_order_id: 3, location_id: 1},
          
          // Materials for WorkOrder 4
          {material_id: 31, material_number: 'M-031', quantity: 6, size: '1x1', status: 'received', receive_date: '2023-03-07', work_order_id: 4, location_id: 1},
          {material_id: 32, material_number: 'M-032', quantity: 10, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 4, location_id: 2},
          {material_id: 33, material_number: 'M-033', quantity: 4, size: '2x2', status: 'received', receive_date: '2023-03-07', work_order_id: 4, location_id: 1},
          {material_id: 34, material_number: 'M-034', quantity: 6, size: '3x3', status: 'in-transit', receive_date: null, work_order_id: 4, location_id: 2},
          {material_id: 35, material_number: 'M-035', quantity: 8, size: '4x4', status: 'received', receive_date: '2023-03-07', work_order_id: 4, location_id: 1},
          {material_id: 36, material_number: 'M-036', quantity: 10, size: '2x2', status: 'received', receive_date: '2023-03-07', work_order_id: 4, location_id: 1},
          {material_id: 37, material_number: 'M-037', quantity: 6, size: '1x1', status: 'received', receive_date: '2023-03-07', work_order_id: 4, location_id: 1},
          {material_id: 38, material_number: 'M-038', quantity: 12, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 4, location_id: 2},
          {material_id: 39, material_number: 'M-039', quantity: 10, size: '3x3', status: 'received', receive_date: '2023-03-07', work_order_id: 4, location_id: 1},
          {material_id: 40, material_number: 'M-040', quantity: 8, size: '2x2', status: 'received', receive_date: '2023-03-07', work_order_id: 4, location_id: 1},

            // Materials for WorkOrder 5
          {material_id: 41, material_number: 'M-041', quantity: 5, size: '5x5', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 1},
          {material_id: 42, material_number: 'M-042', quantity: 3, size: '3x3', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 1},
          {material_id: 43, material_number: 'M-043', quantity: 4, size: '4x4', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 1},
          {material_id: 44, material_number: 'M-044', quantity: 6, size: '6x6', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 1},
          {material_id: 45, material_number: 'M-045', quantity: 2, size: '2x2', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 1},
          {material_id: 46, material_number: 'M-046', quantity: 7, size: '7x7', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 1},
          {material_id: 47, material_number: 'M-047', quantity: 1, size: '1x1', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 1},
          {material_id: 48, material_number: 'M-048', quantity: 8, size: '8x8', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 1},
          {material_id: 49, material_number: 'M-049', quantity: 9, size: '9x9', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 1},
          {material_id: 50, material_number: 'M-050', quantity: 10, size: '10x10', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 1},

          {material_id: 51, material_number: 'M-051', quantity: 5, size: '5x5', status: 'received', receive_date: '2023-01-05', work_order_id: 6, location_id: 1},
          {material_id: 52, material_number: 'M-052', quantity: 3, size: '3x3', status: 'received', receive_date: '2023-01-05', work_order_id: 6, location_id: 1},
          {material_id: 53, material_number: 'M-053', quantity: 4, size: '4x4', status: 'in transit', receive_date: '2023-01-05', work_order_id: 6, location_id: 1},
        {material_id: 54, material_number: 'M-054', quantity: 6, size: '6x6', status: 'received', receive_date: '2023-01-05', work_order_id: 6, location_id: 1},
        {material_id: 55, material_number: 'M-055', quantity: 2, size: '2x2', status: 'in transit', receive_date: '2023-01-05', work_order_id: 6, location_id: 1},
        {material_id: 56, material_number: 'M-056', quantity: 7, size: '7x7', status: 'received', receive_date: '2023-01-05', work_order_id: 6, location_id: 1},
        {material_id: 57, material_number: 'M-057', quantity: 1, size: '1x1', status: 'in transit', receive_date: '2023-01-05', work_order_id: 6, location_id: 1},
        {material_id: 58, material_number: 'M-058', quantity: 8, size: '8x8', status: 'received', receive_date: '2023-01-05', work_order_id: 6, location_id: 1},
        {material_id: 59, material_number: 'M-059', quantity: 9, size: '9x9', status: 'in transit', receive_date: '2023-01-05', work_order_id: 6, location_id: 1},
        {material_id: 60, material_number: 'M-060', quantity: 10, size: '10x10', status: 'received', receive_date: '2023-01-05', work_order_id: 6, location_id: 1},

        // Materials for WorkOrder 7
        {material_id: 61, material_number: 'M-061', quantity: 5, size: '5x5', status: 'in transit', receive_date: '2023-01-05', work_order_id: 7, location_id: 1},
        {material_id: 62, material_number: 'M-062', quantity: 3, size: '3x3', status: 'received', receive_date: '2023-01-05', work_order_id: 7, location_id: 1},
        {material_id: 63, material_number: 'M-063', quantity: 4, size: '4x4', status: 'in transit', receive_date: '2023-01-05', work_order_id: 7, location_id: 1},
        {material_id: 64, material_number: 'M-064', quantity: 6, size: '6x6', status: 'received', receive_date: '2023-01-05', work_order_id: 7, location_id: 1},
        {material_id: 65, material_number: 'M-065', quantity: 2, size: '2x2', status: 'in transit', receive_date: '2023-01-05', work_order_id: 7, location_id: 1},
        {material_id: 66, material_number: 'M-066', quantity: 7, size: '7x7', status: 'received', receive_date: '2023-01-05', work_order_id: 7, location_id: 1},
        {material_id: 67, material_number: 'M-067', quantity: 1, size: '1x1', status: 'in transit', receive_date: '2023-01-05', work_order_id: 7, location_id: 1},
        {material_id: 68, material_number: 'M-068', quantity: 8, size: '8x8', status: 'received', receive_date: '2023-01-05', work_order_id: 7, location_id: 1},
        {material_id: 69, material_number: 'M-069', quantity: 9, size: '9x9', status: 'in transit', receive_date: '2023-01-05', work_order_id: 7, location_id: 1},
        {material_id: 70, material_number: 'M-070', quantity: 10, size: '10x10', status: 'received', receive_date: '2023-01-05', work_order_id: 7, location_id: 1}
        
        
        
        
        
        
        
        
        
        
        ]);
    });
};