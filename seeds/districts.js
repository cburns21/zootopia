
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('districts').del()
    .then(function () {
      // Inserts seed entries
      return knex('districts').insert([
        {id: 1, name: 'tundratown'},
        {id: 2, name: 'meadowlands'},
        {id: 3, name: 'rainforest distric'},
        {id: 4, name: 'canal district'},
        {id: 5, name: 'savana central'},
        {id: 6, name: 'sahara square'},
        {id: 7, name: 'outback island'},
        {id: 8, name: 'little rodentia'}
      ]);
    });
};
