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
router.patch('/:id/update', (req, res) => {
  knex('properties')
    .update(req.body)
    .where('id', req.params.id)
    .then(() => {
        knex('properties')
          .select()
          .where('id', req.params.id)
          .then(property => res.send(property))
      }
    )
})
//rent paid true
router.patch('/paid/:id', (req, res) => {
  knex('properties')
    .update({
      rent_paid: true
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
router.patch('/:id/addrepair', (req, res) => {
  knex('properties')
    .update({
      repairs: true
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
//remove repair
router.patch('/removerepair/:id', (req, res) => {
  knex('properties')
    .update({
      repairs: false
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
