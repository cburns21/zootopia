
exports.seed = function(knex, Promise) {
  return knex('animals').del()
    .then(function () {
      return knex('animals').insert([
        {id: 1, type: 'rabbit'},
        {id: 2, type: 'fox'},
        {id: 3, type: 'buffalo'},
        {id: 4, type: 'cheetah'},
        {id: 5, type: 'polar bear'}
      ]);
    });
};
