
exports.up = function(knex, Promise) {
  return knex.schema.createTable('properties', (table)=> {
    table.increments();
    table.string('address').notNullable();
    table.string('unit').defaultTo("none");
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.integer('zipcode').notNullable();
    table.decimal('mortgage');
    table.decimal('property_tax');
    table.decimal('property_insurance');
    table.decimal('rent_amount');
    table.date('lease_start_date').notNullable();
    table.date('lease_end_date').notNullable();
    table.boolean('rent_paid').defaultTo('true');
    table.boolean('renewal_notice').defaultTo('false');
    table.boolean('repairs').defaultTo('false');
    table.string('repair_description').notNullable().defaultTo('');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('properties')
};