var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
const stripe = require('stripe')('sk_test_51HJE3RGX3LiFGzdnv7xUISbT0G7r2REtVkPW0y43Bs1BsAIpUV8sojEAd9PGZCyERvQHt5SaZgOJqzd301Mhv6eG009tKTaKCf');
const endpointSecret = 'whsec_GRcm7JbFIoy7HADvCahG98ILQbPbVlaN'; 
const mongoose = require('mongoose');
var multer = require('multer');
var upload = multer();
let mailer = require('./mail');
const Users=require('../models/users');
const { informAdmin } = require('./mail');
var cors = require('cors')
router.use(cors())



function fullfillorder(session){
	mailer.sendmail(session.customer_details.email,'Sociolitic Subscription','Transaction Id: '+session.id)
	informAdmin(JSON.stringify(session))	
	Users.findOneAndUpdate({email: session.customer_details.email},{plan: 'pro'})
}

router.post('/stripe/create-checkout-session', async (req, res) => {
	data = JSON.parse(JSON.stringify(req.body))
	console.log(data,data.plan);
	var amount=0
	switch (data.plan.toString()){
		case '1':
			amount=10000;
			break;
		case '2':
			amount=50000;
			break;
		case '3':
			amount=100000;
	}
	const session = await stripe.checkout.sessions.create({
		customer_email: data.email,
		submit_type: 'pay',
		payment_method_types: ['card'],
		line_items: [
			{
				price_data: {
					currency: 'inr',
					product_data: {
						name: 'Sociolitic subscription',
						images: [data.photo],
					},
					unit_amount: amount,
				},
				quantity: 1,
			},
		],
		mode: 'payment',
		success_url: `https://nbot.live/pages/success.html`,
		cancel_url: `https://nbot.live/pages/failed.html`,
	});

	res.json({ id: session.id });
});


router.use(express.urlencoded({ extended: true })); 
router.use(upload.array()); 
router.use(express.json()); 

module.exports = router;
