const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
app.use(express.static('server/public'));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let shoes = [
    {name: 'Red Wing', cost: 250},
    {name: 'Puma Soliel V2', cost: 40},
    {name: 'Space Boots', cost: 10},
    {name: 'Adidas Superstar', cost: 192},
    {name: 'Converse Chuck Taylor low', cost: 32},
    {name: 'Jordan XII', cost: 178},
    {name: 'Nike Roshe Run', cost: 127},
    {name: 'Nike Huarache', cost: 148}
    ];
// let newShoe = {name: '', cost:''};

app.post('/shoe', (req, res) => {
    // let newShoe = req.body;
    shoes.push(req.body);
    console.log( 'POST TO /shoes req.body')
    res.sendStatus(201);
});

app.get('/shoe', (req, res) =>{
    res.send(shoes);
});

app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`)
});