const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shoeRouter = require('./routes/shoe.route');


// const shoeRouter = require('./')
const PORT = process.env.PORT || 5000;
app.use(express.static('server/public'));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// let shoes = [
//     {name: 'nike tennis shoe', cost: 100},
//     {name: 'adidas tennis shoe', cost: 40},
//     ];
// let newShoe = {name: '', cost:''};

app.use('/shoe', shoeRouter);

app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`)
});