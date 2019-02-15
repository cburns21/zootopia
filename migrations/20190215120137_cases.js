
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cases', table => {
        table.increments()
        table.string('description')
        table.string('type')
        table.integer('district_id')
        table.integer('cop_id')
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cases')
};
