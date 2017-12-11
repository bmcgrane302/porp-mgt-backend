
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('properties').del()
    .then(function () {
      // Inserts seed entries
      return knex('properties').insert([
        {address: '123 Main',
         unit: '1',
         city: 'Dallas',
         state: 'TX',
         zipcode: 75201,
         mortgage: 1000.00,
         property_tax: 230.00,
         property_insurance: 80.00,
         rent_amount: 1200.00,
         lease_start_date: 'Mon Nov 5 2017',
         lease_end_date: 'Mon Nov 5 2018',
         rent_paid: true,
         renewal_notice: false,
         repairs: false,
         repair_description:'none',
         },
         {address: '4706 Twinleaf',
          unit: 'none',
          city: 'Gilbert',
          state: 'AZ',
          zipcode: 85296,
          mortgage: 800.00,
          property_tax: 230.00,
          property_insurance: 80.00,
          rent_amount: 1100.00,
          lease_start_date: 'Mon Dec 5 2017',
          lease_end_date: 'Mon Dec 5 2018',
          rent_paid: true,
          renewal_notice: false,
          repairs: true,
          repair_description:'none',
        }
      ]);
    });
};
