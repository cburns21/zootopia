
exports.seed = function(knex, Promise) {
  return knex('cases').del()
    .then(function () {
      return knex('cases').insert([
        {
          id: 1, 
          type: 'missing persons',
          description: 'Mr. Ottertan was last seen running errands Sahara Central. There were no witnesses',
          district_id: 6,
          cop_id: 1
        },

     
      ]);
    });
};
