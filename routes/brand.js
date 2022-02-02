var express = require('express');
var router = express.Router();
const Users = require('../models/users');
var jwt = require('jsonwebtoken');
const Profiles=require('../models/profiles');

var request = require('request');
const { informAdmin,sendMail } = require('./mail');
const fs = require("fs");
var alertEmail = ''

fs.readFile('alert.html', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    alertEmail=data
})

function authMiddleware(req,res,next){
    if(req.headers.authorization){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, 'socioliticSecret', function(err,decoded){
            if(err){
                return res.status(401).send({
                    message: 'Failed to authenticate token.'
                });
            }else{
                req.decoded=decoded
                next()
            }
        })
    }else{
        res.status(401).send({
            message: 'No token provided.'
        });
    }  
}

function validateProfile(req,res,next){
    data = JSON.parse(JSON.stringify(req.body))
    Profiles.findById(data.id,(err,docs)=>{
        if(err){
            res.status(500).send({
                message: 'Error in server'
            })
        }else if(docs){
            if(docs.creator==req.decoded._id){
                if(docs.quota>0){
                    req.profile = docs
                    next()
                }else{
                    res.status(402).json({
                        message: 'Insufficient balance. Quota exhausted. Upgrade to a higher tier.'
                    })
                }
            }else{
                res.status(401).json({
                    message: 'You are not authorized to access/modify this profile'
                })
            }
        }else{
            res.status(404).json({
                message: 'Profile doesn\'t exists'
            })
        }
    })
}

function findProfile(id,callback){
    Profiles.findById(id, (err,docs)=>{
        if(err){
            return res.status(500).send({
                message: 'Error in server'
            })
        }else if(docs){
            return callback(docs)
        }
    })
}

function createProfile(profile,callback){
    Profiles.create(profile, (err,docs)=>{
        if(err){
            return res.status(500).send({
                message: 'Error in server'
            })
        }else if(docs){
            return callback(docs)
        }
    })
}

router.post('/alert',(req,res)=>{
	var data = req.body
	var content=alertEmail
    let whitelistMailIds=['nithin.s491@gmail.com','rajeshmanchikanti10@gmail.com','kokilakn13@gmail.com','reddyharshith90@gmail.com']    
    content = content.replace(/lMentions/g, data.previous_hour);
    content = content.replace(/{yMentions}/g, data.previous_day_hour);
    content = content.replace(/{nMentions}/g, data.this_hour);
    content = content.replace(/{brandName}/g, data.tag);
    content = content.replace(/{percentMaster}/g, data.change);

	for(let profile of data.profiles){
		Profiles.findById(profile,(err,docs)=>{
            console.log(docs,err);
			let users=docs.users
			for(user of users){
				Users.findById(user,(err,docs)=>{
                    if(whitelistMailIds.indexOf(docs.email)!=-1){
					    sendMail(docs.email,`${data.tag} - Sociolitic Alert`,content)
                    }else{
                        console.log('Assuming mail sent to ',docs.email);
                    }
				})
			}
		})
	}
	res.status(200);
	res.end('Done')
})

router.use(authMiddleware);

router.post('/update', (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    Users.findOne({ email: req.decoded.email}, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            docs.brand = data.brand
            docs.competitors = data.competitors.split(',')
            docs.stage = 2
            docs.save()
            res.end("Done")
        }
      })
})

router.post('/createProfile', (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    Users.findOne({ email: req.decoded.email}, function (err, userDocs) {
        if (err){
            console.log(err);
        }
        else{
            if(userDocs.plan=='pro' && userDocs.createdProfiles.length>=10){
                return res.status(402).send({
                    err: 'Not authorised',
                    message: 'Cannot create more than 10 profiles. Purchase Enterprise version'
                });
            }else if(userDocs.plan=='free' && userDocs.createdProfiles.length>=1){
                return res.status(402).send({
                    err: 'Not authorised',
                    message: 'Cannot create more than 1 profile. Purchase Pro version'
                });
            }else if(userDocs.plan=='enterprise' && userDocs.createdProfiles.length>=50){
                return res.status(402).send({
                    err: 'Not authorised',
                    message: 'Cannot create more than 50 profiles. Please contact us for quota increase'
                });
            }
            let profileData = {
                brand: data.brand, 
                users: [userDocs._id], 
                creator: userDocs._id, 
                competitors: data.competitors.split(','),
                analysis: data.analysis,
                quota: userDocs.plan=='enterprise' ? 1000000 : (userDocs.plan=='pro' ? 10000 : 1000)
            }
            createProfile(profileData, (docs)=>{
                userDocs.profiles.push(docs._id)
                userDocs.createdProfiles.push(docs._id)
                userDocs.stage = userDocs.stage>2 ? userDocs.stage : 2
                userDocs.save()
                console.log(userDocs,docs);
                res.setHeader('Content-Type', 'application/json');
                res.json(docs)
                postProfileCreation(data, docs)
            })
        }
      })
})

router.post('/deleteProfile', validateProfile, (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    Users.findOne({ email: req.decoded.email}, function (err, userDocs) {
        if (err){
            console.log(err);
        }
        else{
            userDocs.profiles = userDocs.profiles.filter(profile => profile != data.id)
            userDocs.createdProfiles = userDocs.createdProfiles.filter(profile => profile != data.id)
            userDocs.save()
            res.setHeader('Content-Type', 'application/json');

            Profiles.findById(data.id,(err,docs)=>{
                if(err){
                    res.status(500).send({
                        message: 'Error in server'
                    })
                }else if(docs){
                    docs.users = docs.users.filter(user => user != userDocs._id)
                    if(docs.users.length==0){
                        Profiles.findOneAndDelete({_id: data.id},(err,docs)=>{
                            if(err){
                                console.log(err);
                            }
                            res.json({
                                "message": `Profile ${data.id} deleted`
                            })
                            postProfileDeletion(data, docs)
                        })
                    }else{
                        docs.save()
                        res.json(userDocs)
                    }
                }
            })
        }
      })
})

router.post('/assignProfile', validateProfile, (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    let users = data.users
    for(let user of users){
        Users.findOne({ email: user}, function (err, userDocs) {
            if (err){
                console.log(err);
            }
            else if(userDocs){
                if(!userDocs.profiles.includes(data.id)){
                    userDocs.profiles.push(data.id)
                    findProfile(data.id,(docs)=>{
                        docs.users.push(userDocs._id)
                        docs.save()
                    })
                    userDocs.save()
                    res.setHeader('Content-Type', 'application/json');
                    res.json(userDocs)
                    
                }
            }
        })
    }
})

router.post('/findProfiles', async (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    responseData={}
    for(id of data.profiles){
        let err, profile = await Profiles.findById(id)
        if(err){
            console.log(err);
        }else{
            responseData[id]=profile
        }
    }
    res.setHeader('Content-Type', 'application/json');
    res.json(responseData)
})

function postProfileCreation(data, docs){
    // Kokila - Data module
    var options = {
        'method': 'GET',
        'url': `http://data:5000/insertion?id=${docs._id}`,
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });
    setTimeout((brand=data.brand) => {
        var options3 = {
            'method': 'GET',
            'url': `http://data:5000/aggregate/?q=${brand}`,
        };
        request(options3, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        });
    }, 600000,data.brand);

    // Rajesh - Analytics module
    var options2 = {
        'method': 'GET',
        'url': 'http://analytics:5000/insertionTrigger/',
    };
    request(options2, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });
}

function postProfileDeletion(data, docs){
    // Kokila - Data module
    var options = {
        'method': 'GET',
        'url': `http://data:5000/deletion?id=${data.id}`
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });

    // Rajesh - Analytics module
    var options2 = {
        'method': 'GET',
        'url': `http://analytics:5000/deletionTrigger/?profile=${data.id}`,
    };
    request(options2, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });
}

module.exports = router;
