const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var logger = require("morgan");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));


const stripe = require('stripe')('sk_test_rzkgTgVPuTu8iuiyq7c5WwcN');

app.get('/payment', (req, res) => {
  res.json( "You sent me a get request for id");

    console.log('betalning pågår..')
    /*let charge = await stripe.charges.create({
        amount: 999,
        currency: 'sek',
        source: 'tok_visa',
      }).catch(err => console.log('ERROR:',err));;
      res.json(charge);*/

  /*return stripe.charges
    .create({
      amount: req.body.amount, // Unit: cents
      currency: 'eur',
      source: req.body.tokenId,
      description: 'Test payment',
    })
    .then(result => res.status(200).json(result));*/
});



app.listen(5000, () => console.log('server is running'));