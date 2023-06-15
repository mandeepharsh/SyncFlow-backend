exports.seed = function(knex) {
    return knex('Location').del()
      .then(function () {
        return knex('Location').insert([
          {location_id: 1, location: 'A'},
          {location_id: 2, location: 'B'},
          {location_id: 3, location: 'C'},
          {location_id: 4, location: 'D'},
          {location_id: 5, location: 'E'},
          {location_id: 6, location: 'F'},
          {location_id: 7, location: 'G'},
          {location_id: 8, location: 'H'},
          {location_id: 9, location: 'I'}
        ]);
      });
  };