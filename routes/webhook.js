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
const Profiles=require('../models/profiles');
const { informAdmin,sendMail } = require('./mail');
var cors = require('cors');
const user = require('../models/users');
router.use(cors())
const fs = require("fs");
const alertEmail = fs.readFileSync("alert.html");

function fullfillorder(session){
	sendMail(session.customer_details.email,'Sociolitic Subscription','Transaction Id: '+session.id)
	informAdmin(JSON.stringify(session))	
	Users.findOneAndUpdate({email: session.customer_details.email},{plan: 'pro'},(err,userDocs)=>{
		if(err){
			informAdmin(session,err)
		}else{
			console.log(21,userDocs);
			let newQuota = userDocs.plan=='enterprise' ? 1000000 : (userDocs.plan=='pro' ? 10000 : 1000)
			Profiles.updateMany({creator: userDocs._id}, {"$inc":{"quota": newQuota}},(err,docs)=>{
				if(err){
					informAdmin(session,err)
				}
			})
		}
	})	
}

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

router.get('/testConfirm/:email',(req,res)=>{
	var session = {
		"id": "testTransactionId",
		"customer_details":{
			"email": req.params.email
		}
	}
	fullfillorder(session);
	res.status(200);
	res.end('Done')
})

router.use(express.urlencoded({ extended: true })); 
router.use(upload.array()); 
router.use(express.json()); 

module.exports = router;
