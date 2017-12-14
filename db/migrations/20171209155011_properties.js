
exports.up = function(knex, Promise) {
  return knex.schema.createTable('properties', (table)=> {
    table.increments();
    table.string('address').notNullable();
    table.string('unit').defaultTo("");
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.integer('zipcode').notNullable();
    table.string('fname').notNullable();
    table.string('lname').notNullable();
    table.decimal('mortgage');
    table.decimal('property_tax');
    table.decimal('property_insurance');
    table.decimal('rent_amount');
    table.date('lease_start_date').notNullable();
    table.date('lease_end_date').notNullable();
    table.boolean('rent_paid').defaultTo('true');
    table.boolean('renewal_notice').defaultTo('false');
    table.boolean('repairs').defaultTo('false');
    table.string('repair_description');
    table.decimal('repair_amount');
    table.decimal('ytd_repairs');
    table.decimal('ytd_mortgage');
    table.decimal('ytd_prop_tax');
    table.decimal('ytd_prop_ins');
    table.decimal('ytd_rent');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('properties')
};
