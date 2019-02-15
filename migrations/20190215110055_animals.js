
exports.up = function(knex, Promise) {
    return knex.schema.createTable('animals', table => {
        table.increments()
        table.string('type')
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('animals')
};
