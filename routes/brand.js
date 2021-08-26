var express = require('express');
var router = express.Router();
const Users = require('../models/users');
var jwt = require('jsonwebtoken');
const profiles = require('../models/profiles');

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
            console.log(docs,data);
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
            let profileData = {
                brand: data.brand, 
                users: [userDocs._id], 
                plan: userDocs.plan, 
                competitors: data.competitors.split(','),
                quota: 99999
            }
            createProfile(profileData, (docs)=>{
                userDocs.profiles.push(docs._id)
                userDocs.stage = userDocs.stage>2 ? userDocs.stage : 2
                userDocs.save()
                console.log(userDocs,docs);
                res.setHeader('Content-Type', 'application/json');
                res.json(docs)
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
            userDocs.save()
            res.setHeader('Content-Type', 'application/json');

            profiles.findById(data.id,(err,docs)=>{
                if(err){
                    res.status(500).send({
                        message: 'Error in server'
                    })
                }else if(docs){
                    docs.users = docs.users.filter(user => user != userDocs._id)
                    docs.save()
                    res.json(userDocs)
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

module.exports = router;
