
exports.up = async function(knex, Promise) {
    await knex.schema.hasTable("Users");

    return await knex.schema.createTable("Users", table => {
      table.increments("id").primary(),
        table.string("Name"),
        table.string("Phone"),
        table.string("Address"),
        table.string("Email"),
        table.string("Password");
    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable("Users");
  
};
