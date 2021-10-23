var express = require('express');
var router = express.Router();
var request = require('request');
var jwt = require('jsonwebtoken');
const profiles = require('../models/profiles');
const Users = require('../models/users');
const { informAdmin, sendMail } = require('./mail')

const aggregate = require('../models/aggregate');
var cors = require('cors')
router.use(cors())

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
    profiles.findById(req.query.q,(err,docs)=>{
        if(err){
            console.log(111,err);
            res.status(500).send({
                message: 'Error in server'
            })
        }else if(docs){
            if(docs.users.includes(req.decoded._id)){
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
                    message: 'You are not authorized to access this profile'
                })
            }
        }else{
            res.status(404).json({
                message: 'Profile doesn\'t exists'
            })
        }
    })
}

async function getProfileDetails(profileId){
    return await profiles.findById(profileId)
}

router.use(authMiddleware);


router.get('/desc-analytics', validateProfile, (req,res)=>{
    res.setHeader('Content-type', 'application/json')
    brand=req.profile.brand
    var options = {
        'method': 'GET',
        'url': `http://analytics:5000/analytics/?brand=${brand}&duration=${req.query.duration}`,
    };
    request(options, function (error, response) {
        if (error) {
            console.log(79,error);
            res.send(error);
            return ;
        }
        try {
            let response2 = JSON.parse(response.body)
            res.json(response2);
        } catch (e) {
            console.log(88,e);
            res.send(response.body)
        }
        profiles.findOneAndUpdate({_id: req.profile.id},{"$inc": {"quota": -10}},(err,docs)=>{
            console.log(err,docs);
        })
    });
})

router.get('/text-analytics', validateProfile, (req,res)=>{
    res.setHeader('Content-type', 'application/json')
    brand=req.profile.brand
    var options = {
        'method': 'GET',
        'url': `http://analytics:5000/Text_analytics/?brand=${brand}&duration=${req.query.duration}`,
    };
    request(options, function (error, response) {
        if (error) {
            res.send(error);
            return ;
        }
        try {
            let response = JSON.parse(response.body)
            res.json(response);
        } catch (e) {
            res.send(response.body)
        }
        profiles.findOneAndUpdate({_id: req.profile.id},{"$inc": {"quota": -10}},(err,docs)=>{
            console.log(err,docs);
        })
    });
})

router.get('/recommend-competitor', validateProfile, (req,res)=>{
    res.setHeader('Content-type', 'application/json')
    brand=req.profile.brand
    var options = {
        'method': 'GET',
        'url': `http://analytics:5000/recommenderCompetitor/?brand=${brand}`,
    };
    request(options, function (error, response) {
        if (error) {
            res.send(error);
            return ;
        }
        try {
            let response = JSON.parse(response.body)
            res.json(response);
        } catch (e) {
            res.send(response.body)
        }
        // profiles.findOneAndUpdate({_id: req.profile.id},{"$inc": {"quota": -10}},(err,docs)=>{
        //     console.log(err,docs.quota);
        // })
    });
})

router.get('/recommend-brand', (req,res)=>{
    res.setHeader('Content-type', 'application/json')
    var options = {
        'method': 'GET',
        'url': `http://analytics:5000/recommenderUser/?user=${req.decoded.userId}`,
    };
    console.log(124,req.decoded);
    request(options, function (error, response) {
        if (error) {
            res.send(error);
            return ;
        }
        else{
            try {
                let response = JSON.parse(response.body)
                res.json(response);
            } catch (e) {
                res.send(response.body)
            }
        }
        // profiles.findOneAndUpdate({_id: req.profile.id},{"$inc": {"quota": -10}},(err,docs)=>{
        //     console.log(err,docs.quota);
        // })
    });
})

module.exports = router;