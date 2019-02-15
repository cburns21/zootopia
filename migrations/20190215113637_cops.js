
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cops', table => {
        table.increments()
        table.string('f_name')
        table.string('l_name')
        table.integer('animal_id')
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cops')
};
