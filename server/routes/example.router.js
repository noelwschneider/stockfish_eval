const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// GET Route
router.get('/', (req, res) => {
    const queryText = `
        SELECT * FROM "example"
        ORDER BY "integer" DESC, "id" ASC
        `
    
    pool.query(queryText)
    .then( result => {
        console.log('router GET result:', result.rows)
        res.send(result.rows)
    })
    .catch( error => {
        console.log('error in server GET', error)
        res.sendStatus(500)
    })
})

// POST ROUTE


// PUT Route
router.put('/:id', (req, res) => {

    const queryValues = req.params.id
    const queryText = `
        UPDATE "example_table" 
        SET "number" = "number" + 1
        WHERE "id" = $1
    `
    
   pool.query(queryText, [queryValues])
   .then( response => {
        res.sendStatus(200)
   })
   .catch( error => {
    console.log('error in server PUT', error)
    res.sendStatus(500)
   }) 
}); 

// DELETE ROUTE

module.exports = router;