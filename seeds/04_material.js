exports.seed = function (knex) {
  return knex('Material').del()
    .then(function () {
      return knex('Material').insert([
        // Materials for WorkOrder 1
        { material_id: 1, material_number: 'KO-001', quantity: 10, size: '2x4', status: 'received', receive_date: '2023-01-02', work_order_id: 1, location_id: 1 },
        { material_id: 2, material_number: 'KO-002', quantity: 15, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 1, location_id: 1 },
        { material_id: 3, material_number: 'KO-003', quantity: 8, size: '3x3', status: 'received', receive_date: '2023-01-05', work_order_id: 1, location_id: 1 },
        { material_id: 4, material_number: 'KO-004', quantity: 6, size: '2x2', status: 'received', receive_date: '2023-01-05', work_order_id: 1, location_id: 1 },
        { material_id: 5, material_number: 'KO-005', quantity: 12, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 1, location_id: 1 },
        { material_id: 6, material_number: 'KO-006', quantity: 4, size: '2x2', status: 'received', receive_date: '2023-01-05', work_order_id: 1, location_id: 1 },
        { material_id: 7, material_number: 'KO-007', quantity: 10, size: '4x4', status: 'received', receive_date: '2023-01-05', work_order_id: 1, location_id: 1 },
        { material_id: 8, material_number: 'KO-008', quantity: 8, size: '3x3', status: 'in-transit', receive_date: null, work_order_id: 1, location_id: 1 },
        { material_id: 9, material_number: 'KO-009', quantity: 6, size: '2x2', status: 'received', receive_date: '2023-01-05', work_order_id: 1, location_id: 1 },
        { material_id: 10, material_number: 'KO-010', quantity: 15, size: '4x4', status: 'received', receive_date: '2023-01-05', work_order_id: 1, location_id: 1 },

        // Materials for WorkOrder 2
        { material_id: 11, material_number: 'NA-011', quantity: 4, size: '2x2', status: 'received', receive_date: '2023-01-03', work_order_id: 2, location_id: 2 },
        { material_id: 12, material_number: 'NA-012', quantity: 10, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 2, location_id: 2 },
        { material_id: 13, material_number: 'NA-013', quantity: 8, size: '3x3', status: 'received', receive_date: '2023-01-05', work_order_id: 2, location_id: 2 },
        { material_id: 14, material_number: 'NA-014', quantity: 6, size: '2x2', status: 'received', receive_date: '2023-01-05', work_order_id: 2, location_id: 2 },
        { material_id: 15, material_number: 'NA-015', quantity: 12, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 2, location_id: 2 },
        { material_id: 16, material_number: 'NA-016', quantity: 4, size: '2x2', status: 'received', receive_date: '2023-01-05', work_order_id: 2, location_id: 2 },
        { material_id: 17, material_number: 'NA-017', quantity: 10, size: '4x4', status: 'received', receive_date: '2023-01-05', work_order_id: 2, location_id: 2 },
        { material_id: 18, material_number: 'NA-018', quantity: 8, size: '3x3', status: 'in-transit', receive_date: null, work_order_id: 2, location_id: 2 },
        { material_id: 19, material_number: 'NA-019', quantity: 6, size: '2x2', status: 'received', receive_date: '2023-01-05', work_order_id: 2, location_id: 2 },
        { material_id: 20, material_number: 'NA-020', quantity: 15, size: '4x4', status: 'received', receive_date: '2023-01-05', work_order_id: 2, location_id: 2 },

        // Materials for WorkOrder 3
        { material_id: 23, material_number: 'PR-023', quantity: 6, size: '2x2', status: 'received', receive_date: '2023-02-05', work_order_id: 3, location_id: 3 },
        { material_id: 24, material_number: 'PR-024', quantity: 10, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 3, location_id: 3 },
        { material_id: 25, material_number: 'PR-025', quantity: 8, size: '3x3', status: 'received', receive_date: '2023-02-05', work_order_id: 3, location_id: 3 },
        { material_id: 26, material_number: 'PR-026', quantity: 6, size: '2x2', status: 'received', receive_date: '2023-02-05', work_order_id: 3, location_id: 3 },
        { material_id: 27, material_number: 'PR-027', quantity: 12, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 3, location_id: 3 },
        { material_id: 28, material_number: 'PR-028', quantity: 8, size: '3x3', status: 'received', receive_date: '2023-02-05', work_order_id: 3, location_id: 3 },
        { material_id: 29, material_number: 'PR-029', quantity: 6, size: '2x2', status: 'received', receive_date: '2023-02-05', work_order_id: 3, location_id: 3 },
        { material_id: 30, material_number: 'PR-030', quantity: 15, size: '4x4', status: 'received', receive_date: '2023-02-05', work_order_id: 3, location_id: 3 },

        // Materials for WorkOrder 4
        { material_id: 31, material_number: 'CI-031', quantity: 6, size: '1x1', status: 'received', receive_date: '2023-03-07', work_order_id: 4, location_id: 4 },
        { material_id: 32, material_number: 'CI-032', quantity: 10, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 4, location_id: 4 },
        { material_id: 33, material_number: 'CI-033', quantity: 4, size: '2x2', status: 'received', receive_date: '2023-03-07', work_order_id: 4, location_id: 4 },
        { material_id: 34, material_number: 'CI-034', quantity: 6, size: '3x3', status: 'in-transit', receive_date: null, work_order_id: 4, location_id: 4 },
        { material_id: 35, material_number: 'CI-035', quantity: 8, size: '4x4', status: 'received', receive_date: '2023-03-07', work_order_id: 4, location_id: 4 },
        { material_id: 36, material_number: 'CI-036', quantity: 10, size: '2x2', status: 'received', receive_date: '2023-03-07', work_order_id: 4, location_id: 4 },
        { material_id: 37, material_number: 'CI-037', quantity: 6, size: '1x1', status: 'received', receive_date: '2023-03-07', work_order_id: 4, location_id: 4 },
        { material_id: 38, material_number: 'CI-038', quantity: 12, size: '4x4', status: 'in-transit', receive_date: null, work_order_id: 4, location_id: 4 },
        { material_id: 39, material_number: 'CI-039', quantity: 10, size: '3x3', status: 'received', receive_date: '2023-03-07', work_order_id: 4, location_id: 4 },
        { material_id: 40, material_number: 'CI-040', quantity: 8, size: '2x2', status: 'received', receive_date: '2023-03-07', work_order_id: 4, location_id: 4 },

        // Materials for WorkOrder 5
        { material_id: 41, material_number: 'ST-041', quantity: 5, size: '5x5', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 5 },
        { material_id: 42, material_number: 'ST-042', quantity: 3, size: '3x3', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 5 },
        { material_id: 43, material_number: 'ST-043', quantity: 4, size: '4x4', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 5 },
        { material_id: 44, material_number: 'ST-044', quantity: 6, size: '6x6', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 5 },
        { material_id: 45, material_number: 'ST-045', quantity: 2, size: '2x2', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 5 },
        { material_id: 46, material_number: 'ST-046', quantity: 7, size: '7x7', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 5 },
        { material_id: 47, material_number: 'ST-047', quantity: 1, size: '1x1', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 5 },
        { material_id: 48, material_number: 'ST-048', quantity: 8, size: '8x8', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 5 },
        { material_id: 49, material_number: 'ST-049', quantity: 9, size: '9x9', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 5 },
        { material_id: 50, material_number: 'ST-050', quantity: 10, size: '10x10', status: 'received', receive_date: '2023-01-05', work_order_id: 5, location_id: 5 },

        { material_id: 51, material_number: 'ST-051', quantity: 5, size: '5x5', status: 'received', receive_date: '2023-01-05', work_order_id: 6, location_id: 6 },
        { material_id: 52, material_number: 'ST-052', quantity: 3, size: '3x3', status: 'received', receive_date: '2023-01-05', work_order_id: 6, location_id: 6 },
        { material_id: 53, material_number: 'ST-053', quantity: 4, size: '4x4', status: 'in transit', receive_date: '2023-01-05', work_order_id: 6, location_id: 6 },
        { material_id: 54, material_number: 'ST-054', quantity: 6, size: '6x6', status: 'received', receive_date: '2023-01-05', work_order_id: 6, location_id: 6 },
        { material_id: 55, material_number: 'ST-055', quantity: 2, size: '2x2', status: 'in transit', receive_date: '2023-01-05', work_order_id: 6, location_id: 6 },
        { material_id: 56, material_number: 'ST-056', quantity: 7, size: '7x7', status: 'received', receive_date: '2023-01-05', work_order_id: 6, location_id: 6 },
        { material_id: 57, material_number: 'ST-057', quantity: 1, size: '1x1', status: 'in transit', receive_date: '2023-01-05', work_order_id: 6, location_id: 6 },
        { material_id: 58, material_number: 'ST-058', quantity: 8, size: '8x8', status: 'received', receive_date: '2023-01-05', work_order_id: 6, location_id: 6 },
        { material_id: 59, material_number: 'ST-059', quantity: 9, size: '9x9', status: 'in transit', receive_date: '2023-01-05', work_order_id: 6, location_id: 6 },
        { material_id: 60, material_number: 'ST-060', quantity: 10, size: '10x10', status: 'received', receive_date: '2023-01-05', work_order_id: 6, location_id: 6 },

        // Materials for WorkOrder 7
        { material_id: 61, material_number: 'IN-061', quantity: 5, size: '5x5', status: 'in transit', receive_date: '2023-01-05', work_order_id: 7, location_id: 7 },
        { material_id: 62, material_number: 'IN-062', quantity: 3, size: '3x3', status: 'received', receive_date: '2023-01-05', work_order_id: 7, location_id: 7 },
        { material_id: 63, material_number: 'IN-063', quantity: 4, size: '4x4', status: 'in transit', receive_date: '2023-01-05', work_order_id: 7, location_id: 7 },
        { material_id: 64, material_number: 'IN-064', quantity: 6, size: '6x6', status: 'received', receive_date: '2023-01-05', work_order_id: 7, location_id: 7 },
        { material_id: 65, material_number: 'IN-065', quantity: 2, size: '2x2', status: 'in transit', receive_date: '2023-01-05', work_order_id: 7, location_id: 7 },
        { material_id: 66, material_number: 'IN-066', quantity: 7, size: '7x7', status: 'received', receive_date: '2023-01-05', work_order_id: 7, location_id: 7 },
        { material_id: 67, material_number: 'IN-067', quantity: 1, size: '1x1', status: 'in transit', receive_date: '2023-01-05', work_order_id: 7, location_id: 7 },
        { material_id: 68, material_number: 'IN-068', quantity: 8, size: '8x8', status: 'received', receive_date: '2023-01-05', work_order_id: 7, location_id: 7 },
        { material_id: 69, material_number: 'IN-069', quantity: 9, size: '9x9', status: 'in transit', receive_date: '2023-01-05', work_order_id: 7, location_id: 7 },
        { material_id: 70, material_number: 'IN-070', quantity: 10, size: '10x10', status: 'received', receive_date: '2023-01-05', work_order_id: 7, location_id: 7 }
        ,

        // MATERIALS FOR WORKORDER 8
        { material_id: 71, material_number: 'GE-061', quantity: 5, size: '5x5', status: 'in transit', receive_date: null, work_order_id: 8, location_id: 8 },
        { material_id: 72, material_number: 'GE-062', quantity: 3, size: '3x3', status: 'in transit', receive_date: null, work_order_id: 8, location_id: 8 },
        { material_id: 73, material_number: 'GE-063', quantity: 4, size: '4x4', status: 'in transit', receive_date: null, work_order_id: 8, location_id: 8 },
        { material_id: 74, material_number: 'GE-064', quantity: 6, size: '6x6', status: 'in transit', receive_date: null, work_order_id: 8, location_id: 8 },
        { material_id: 75, material_number: 'GE-065', quantity: 2, size: '2x2', status: 'in transit', receive_date: null, work_order_id: 8, location_id: 8 },
        { material_id: 76, material_number: 'GE-066', quantity: 7, size: '7x7', status: 'in transit', receive_date: null, work_order_id: 8, location_id: 8 },
        { material_id: 77, material_number: 'GE-067', quantity: 1, size: '1x1', status: 'in transit', receive_date: null, work_order_id: 8, location_id: 8 },
        { material_id: 78, material_number: 'GE-068', quantity: 8, size: '8x8', status: 'in transit', receive_date: null, work_order_id: 8, location_id: 8 },
        { material_id: 79, material_number: 'GE-069', quantity: 9, size: '9x9', status: 'in transit', receive_date: null, work_order_id: 8, location_id: 8 },
        { material_id: 80, material_number: 'GE-070', quantity: 10, size: '10x10', status: 'in transit', receive_date: null, work_order_id: 8, location_id: 8 }
        ,
        // MATERIALS FOR WORKORDER 9
        { material_id: 81, material_number: 'BO-061', quantity: 5, size: '5x5', status: 'in transit', receive_date: null, work_order_id: 9, location_id: 9 },
        { material_id: 82, material_number: 'BO-062', quantity: 3, size: '3x3', status: 'in transit', receive_date: null, work_order_id: 9, location_id: 9 },
        { material_id: 83, material_number: 'BO-063', quantity: 4, size: '4x4', status: 'in transit', receive_date: null, work_order_id: 9, location_id: 9 },
        { material_id: 84, material_number: 'BO-064', quantity: 6, size: '6x6', status: 'in transit', receive_date: null, work_order_id: 9, location_id: 9 },
        { material_id: 85, material_number: 'BO-065', quantity: 2, size: '2x2', status: 'in transit', receive_date: null, work_order_id: 9, location_id: 9 },
        { material_id: 86, material_number: 'BO-066', quantity: 7, size: '7x7', status: 'in transit', receive_date: null, work_order_id: 9, location_id: 9 },
        { material_id: 87, material_number: 'BO-067', quantity: 1, size: '1x1', status: 'in transit', receive_date: null, work_order_id: 9, location_id: 9 },
        { material_id: 88, material_number: 'BO-068', quantity: 8, size: '8x8', status: 'in transit', receive_date: null, work_order_id: 9, location_id: 9 },
        { material_id: 89, material_number: 'BO-069', quantity: 9, size: '9x9', status: 'in transit', receive_date: null, work_order_id: 9, location_id: 9 },
        { material_id: 90, material_number: 'BO-070', quantity: 10, size: '10x10', status: 'in transit', receive_date: null, work_order_id: 9, location_id: 9 }


      ]);
    });
};