var express = require('express');
var router = express.Router();
const Users = require('../models/users');
var jwt = require('jsonwebtoken');
const profiles = require('../models/profiles');
var request = require('request');

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

function findProfile(id,callback){
    profiles.findById(id, (err,docs)=>{
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
    profiles.create(profile, (err,docs)=>{
        if(err){
            return res.status(500).send({
                message: 'Error in server'
            })
        }else if(docs){
            return callback(docs)
        }
    })
}

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
                var options = {
                    'method': 'GET',
                    'url': `http://data:5000/insertion?id=${docs._id}`,
                    'headers': {
                }
                };
                request(options, function (error, response) {
                    if (error) throw new Error(error);
                    console.log(response.body);
                });
                setTimeout((brand=data.brand) => {
                    var options = {
                        'method': 'GET',
                        'url': `http://data:5000/aggregate/?q=${brand}`,
                        'headers': {
                    }
                    };
                    request(options, function (error, response) {
                        if (error) throw new Error(error);
                        console.log(response.body);
                    });
                }, 600000,data.brand);
            })
        }
      })
})

router.post('/deleteProfile', (req, res) => {
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

            profiles.findById(data.id,(err,docs)=>{
                if(err){
                    res.status(500).send({
                        message: 'Error in server'
                    })
                }else if(docs){
                    docs.users = docs.users.filter(user => user != userDocs._id)
                    if(docs.users.length==0){
                        profiles.findOneAndDelete({_id: data.id},(err,docs)=>{
                            if(err){
                                console.log(err);
                            }
                            res.json({
                                "message": `Profile ${data.id} deleted`
                            })
                            var options = {
                                'method': 'GET',
                                'url': `http://data:5000/deletion?id=${data.id}`,
                                'headers': {
                            }
                            };
                            request(options, function (error, response) {
                                if (error) throw new Error(error);
                                console.log(response.body);
                            });
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

router.post('/assignProfile', (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    Users.findOne({ email: req.decoded.email}, function (err, userDocs) {
        if (err){
            console.log(err);
        }
        else{
            userDocs.profiles.push(data.id)
            findProfile(data.id,(docs)=>{
                docs.users.push(userDocs._id)
                docs.save()
            })
            userDocs.save()
            res.setHeader('Content-Type', 'application/json');
            res.json(userDocs)
        }
      })
})

router.post('/findProfiles', async (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    responseData={}
    for(id of data.profiles){
        let err, profile = await profiles.findById(id)
        if(err){
            console.log(err);
        }else{
            responseData[id]=profile
        }
    }
    res.setHeader('Content-Type', 'application/json');
    res.json(responseData)
})

module.exports = router;
