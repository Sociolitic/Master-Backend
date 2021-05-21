var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
const stripe = require('stripe')('sk_test_51HJE3RGX3LiFGzdnv7xUISbT0G7r2REtVkPW0y43Bs1BsAIpUV8sojEAd9PGZCyERvQHt5SaZgOJqzd301Mhv6eG009tKTaKCf');
const endpointSecret = 'whsec_wUyGCHtlK9MzGItYsyx7kOak7OcUF5yC'; 
const mongoose = require('mongoose');
var multer = require('multer');
var upload = multer();
let mailer = require('./mail');


router.post('/confirm',bodyParser.raw({ type: 'application/json' }), (request, response) =>{
    const payload = request.body;
  
    const sig = request.headers['stripe-signature'];
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      return response.status(400).send(`Webhook Error: ${err.message}`);
    }
  
    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      fullfillorder(session)
    }
  
    response.status(200);
    response.end('Done')
})

// mailer.alertAdmin("Hi")

router.use(express.urlencoded({ extended: true })); 
router.use(upload.array()); 
router.use(express.json()); 

module.exports = router;
