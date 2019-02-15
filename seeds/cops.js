
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cops').del()
    .then(function () {
      // Inserts seed entries
      return knex('cops').insert([
        {id: 1, f_name: 'Judy', l_name:'Hopps', animal_id:1},
        {id: 2, f_name: 'Nick', l_name:'Wilde', animal_id:2},
        {id: 3, f_name: 'Chief', l_name:'Bogo', animal_id:3},
        {id: 4, f_name:'Benjamin', l_name:'Clawhauser', animal_id:4}
      ]);
    });
};
