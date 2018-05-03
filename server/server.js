const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const Pool = pg.Pool; // capital "P" means its a class or constructor
const pool = new Pool({
    database: 'shoe_store', //the name of the db.
    host: 'localhost', //where your db is.
    port: 5432, //port of db. 5432 is default for postgres
    max: 10, // how many connections (queries at one time)10 is what heroku sets for its number of free queries running simultaneously; 
    idleTimeoutMillis: 30000 // 30 seconds to try to connect, otherwise cancel query;
});

pool.on('connect', () => {
    console.log('Postgresql connected');
});

pool.on('error', (error) => {
    console.log('Error with postgres pool', error);
});

const PORT = process.env.PORT || 5000;
app.use(express.static('server/public'));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let shoes = [
    {name: 'nike tennis shoe', cost: 100},
    {name: 'adidas tennis shoe', cost: 40},
    ];
// let newShoe = {name: '', cost:''};

app.post('/shoe', (req, res) => {
    let shoe = req.body;
    pool.query(`INSERT INTO "shoes" ("name", "cost")
    VALUES($1, $2);`, [shoe.name, shoe.cost])
    .then((results) => {
        res.sendStatus(200);
    })
    .catch((error) =>{
        ('error with POST', error);
        res.sendStatus(500);
    })
    // shoes.push(req.body);
    // console.log( 'POST TO /shoes req.body')
    // res.sendStatus(201);
});

app.get('/shoe', (req, res) =>{
    res.send(shoes);
});

app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`)
});