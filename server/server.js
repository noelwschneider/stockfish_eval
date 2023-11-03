const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- ROUTER FILES -----------**/
const exampleRouter = require('./routes/example.router');

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/example', exampleRouter); // EXAMPLE ROUTER

/** -----------SERVE STATIC FILES ----------**/
app.use(express.static('build'));

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});