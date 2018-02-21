var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res) => {
  knex('properties')
    .then(function(property) {
      res.send(property);
    });
});
//add property
router.post('/', (req, res) => {
  knex('properties')
    .insert(req.body)
    .then(() => {
      knex('properties')
        .select()
        .then((property) => {
          console.log(property);
          res.send(property)
        })
    })
})
//delete property
router.delete('/:id', (req, res) => {
  console.log("PARAMS", req.params)
  knex('properties')
    .del()
    .where('id', req.params.id)
    .then(() => {
      knex('properties')
        .select()
        .then(property => res.send(property))
    })
})
//update property
router.patch('/update/:id', (req, res) => {
  console.log("req.body", req.body)
  knex('properties')
    .update(req.body)
    .where('id', req.params.id)
    .then(() => {
        knex('properties')
          .select()
          .then(property => res.send(property))
      }
    )
})
//rent paid true
router.patch('/paid/:id', (req, res) => {
  console.log('mortgage', req.body.ytd_mortgage);
  knex('properties')
    .update({
      rent_paid: true,
      ytd_rent: req.body.ytd_rent,
      ytd_mortgage: req.body.ytd_mortgage,
      ytd_prop_ins: req.body.ytd_prop_ins,
      ytd_prop_tax: req.body.ytd_prop_tax
    })
    .where('id', req.params.id)
    .then(()=>{
      knex('properties')
      .select()
      .then(property => res.send(property))
    }

    )
})
//rent paid false
router.patch('/unpaid/:id', (req, res) => {
  knex('properties')
    .update({
      rent_paid: false
    })
    .where('id', req.params.id)
    .then(()=>{
      knex('properties')
      .select()
      .then(property => res.send(property))
    }

    )
})
//add repair
router.patch('/addrepair/:id', (req, res) => {
  knex('properties')
    .update({
      repairs: true
    })
    .where('id', req.params.id)
    .then(()=>{
      knex('properties')
      .select()
      .then(property => res.send(property))
    }

    )
})
//remove repair
router.patch('/removerepair/:id', (req, res) => {

  knex('properties')
    .update({
      repairs: false,
      repair_description: '',
      repair_amount: 0,
      ytd_repairs: req.body.ytd_repairs
    })
    .where('id', req.params.id)
    .then(()=>{
      knex('properties')
      .select()
      .then(property => res.send(property))
    }

    )
})
//renewal to true
router.patch('/:id/addrenewal', (req, res) => {
  knex('properties')
    .update({
      renewal_notice: true
    })
    .where('id', req.params.id)
    .then(()=>{
      knex('properties')
      .select()
      .where('id', req.params.id)
      .then(property => res.send(property))
    }

    )
})

router.patch('/removerenewal/:id', (req, res) => {
  knex('properties')
    .update({
      renewal_notice: false
    })
    .where('id', req.params.id)
    .then(()=>{
      knex('properties')
      .select()
      .then(property => res.send(property))
    }

    )
})





module.exports = router;
