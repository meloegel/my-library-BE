
exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments('id')
            tbl.string('username').notNullable()
            tbl.string('password').notNullable()
            tbl.string('email')
        })
        .createTable('books', tbl => {
            tbl.increments('id')
            tbl.string('title').unique().notNullable()
            tbl.string('author').notNullable()
            tbl.integer('pageCount')
            tbl.integer('yearPublished')
            tbl.string('coverArt')
            tbl.string('description')
            tbl.integer('userId').unsigned().notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('books')
};
