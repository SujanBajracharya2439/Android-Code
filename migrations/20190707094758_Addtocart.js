
exports.up = async function(knex, Promise) {
    await knex.schema.hasTable("Addtocart");

    return await knex.schema.createTable("Addtocart", table => {
      table.increments("id").primary(),
        table.string("title"),
        table.string("price"),
        table.string("image"),
        table.string("email"),
        table.string("remarks")

    });
    
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable("Addtocart");

};
