const db = require('pg');

const pool = new db.Pool({
    host: 'localhost',
    port: 5432,
    database: 'example_database', 
});

module.exports = pool;