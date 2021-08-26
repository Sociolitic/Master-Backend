var express = require('express');
var router = express.Router();
var request = require('request');
var jwt = require('jsonwebtoken');
const profiles = require('../models/profiles');

// const Users = require('../models/users');
const youtube = require('../models/youtube');
const twitter = require('../models/twitter');
const reddit = require('../models/reddit');
const tumblr = require('../models/tumblr');
const io = require('socket.io')(7000, {
    cors: {
        origin: '*'
    }
});

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
    profiles.findOne({brand: req.query.q},(err,docs)=>{
        if(err){
            console.log(err);
            res.status(500).send({
                message: 'Error in server'
            })
        }else if(docs){
            if(docs.users.includes(req.decoded._id) && docs.quota>0){
                req.profiles = docs
                next()
            }else{
                res.status(401).send({
                    message: 'You are not authorized to access this profile'
                })
            }
        }
        console.log(55,docs.users,req.decoded._id);
    })
}

router.use(authMiddleware);

io.on('connection', (socket)=>{
    console.log('a user connected', socket.id);
    socket.on('redditNew', (data)=>{
        redditStreamNew(data,socket)
    })
    socket.on('twitterNew', (data)=>{
        twitterStreamNew(data,socket)
    })
    socket.on('youtubeNew', (data)=>{
        youtubeStreamNew(data,socket)
    })
    socket.on('tumblrNew', (data)=>{
        tumblrStreamNew(data,socket)
    })
});

router.get('/reddit', validateProfile, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    console.log(51,req.decoded);
    // Old data
    reddit.find({tag: req.query.q, updatedAt : { $lte : new Date()}}, function (err, docs){
        if(err){
            throw new Error(err)
        }else{
            if(docs[0]){
                res.json(docs)
            }
        }
    })
})

router.get('/youtube', validateProfile, (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    // Old data
    youtube.find({tag: req.query.q, updatedAt : { $lte : new Date()}}, function (err, docs){
        if(err){
            throw new Error(err)
        }else{
            if(docs[0]){
                res.json(docs)
            }
        }
    })
})

router.get('/twitter', validateProfile, (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    // Old data
    twitter.find({tag: req.query.q, updatedAt : { $lte : new Date()}}, function (err, docs){
        if(err){
            throw new Error(err)
        }else{
            if(docs[0]){
                res.json(docs)
            }
        }
    })
})

router.get('/tumblr', validateProfile, (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    // Old data
    tumblr.find({tag: req.query.q, updatedAt : { $lte : new Date()}}, function (err, docs){
        if(err){
            throw new Error(err)
        }else{
            if(docs[0]){
                res.json(docs)
            }
        }
    })
})

function redditStreamNew(query,socket){
    var store={}
    limit=50
    var stop= false
    thisTime=new Date()
    options = {
        'method': 'GET',
        'url': `http://172.31.43.159:5000/reddit/search/?q=${query}&sort=new&limit=${limit}`
    };
    request(options, function (error, response) {
        if (error){
            console.log(error)
        }else{
            stop=true
        }
    });

    // New data
    var intervalCheck = setInterval(() => {
        if(!stop){
            reddit.find({tag: query, updatedAt : { $gte : thisTime}}, function (err, docs){
                if(err){
                    throw new Error(err)
                }else{
                    console.log(docs);
                    if(docs[0]){
                        newDocs=[]
                        for(data of docs){
                            if(!store[data._id]){
                                store[data._id]=1
                                newDocs.push(data)
                            }
                        }
                        if(newDocs.length){
                            socket.emit('redditFeed', newDocs)
                        }
                        thisTime=new Date()
                    }
                }
            })
        }else{
            console.log("stream stop");
            socket.emit('redditFeedEnd', "true")
            clearInterval(intervalCheck)
        }
    } , 500);
}

function twitterStreamNew(query,socket){
    var store={}
    limit=30
    var stop= false
    thisTime=new Date()
    options = {
        'method': 'GET',
        'url': `http://172.31.43.159:5000/twitter/search/?q=${query}&limit=${limit}`
    };
    request(options, function (error, response) {
        if (error){
            console.log(error)
        }else{
            stop=true
        }
    });

    // New data
    var intervalCheck = setInterval(() => {
        if(!stop){
            twitter.find({tag: query, updatedAt : { $gte : thisTime}}, function (err, docs){
                if(err){
                    throw new Error(err)
                }else{
                    if(docs[0]){
                        newDocs=[]
                        for(data of docs){
                            if(!store[data._id]){
                                store[data._id]=1
                                newDocs.push(data)
                            }
                        }
                        if(newDocs.length){
                            socket.emit('twitterFeed', newDocs)
                        }
                        thisTime=new Date()
                    }
                }
            })
        }else{
            console.log("stream stop");
            socket.emit('twitterFeedEnd', "true")
            delete store
            clearInterval(intervalCheck)
        }
    } , 1000);
}

function youtubeStreamNew(query,socket){
    var store={}
    limit=30
    var stop= false
    thisTime=new Date()
    options = {
        'method': 'GET',
        'url': `http://172.31.43.159:5000/youtube/search/?q=${query}&limit=${limit}`
    };
    request(options, function (error, response) {
        if (error){
            console.log(error)
        }else{
            stop=true
        }
    });

    // New data
    var intervalCheck = setInterval(() => {
        if(!stop){
            youtube.find({tag: query, updatedAt : { $gte : thisTime}}, function (err, docs){
                if(err){
                    throw new Error(err)
                }else{
                    if(docs[0]){
                        newDocs=[]
                        for(data of docs){
                            if(!store[data._id]){
                                store[data._id]=1
                                newDocs.push(data)
                            }
                        }
                        if(newDocs.length){
                            socket.emit('youtubeFeed', newDocs)
                        }
                        thisTime=new Date()
                    }
                }
            })
        }else{
            console.log("stream stop");
            socket.emit('youtubeFeedEnd', "true")
            delete store
            clearInterval(intervalCheck)
        }
    } , 1000);
}

function tumblrStreamNew(query,socket){
    var store={}
    limit=30
    var stop= false
    thisTime=new Date()
    options = {
        'method': 'GET',
        'url': `http://172.31.43.159:5000/tumblr/search/?q=${query}&limit=${limit}`
    };
    request(options, function (error, response) {
        if (error){
            throw new Error(error)
        }else{
            stop=true
        }
    });

    // New data
    var intervalCheck = setInterval(() => {
        if(!stop){
            tumblr.find({tag: query, updatedAt : { $gte : thisTime}}, function (err, docs){
                if(err){
                    throw new Error(err)
                }else{
                    if(docs[0]){
                        newDocs=[]
                        for(data of docs){
                            if(!store[data._id]){
                                store[data._id]=1
                                newDocs.push(data)
                            }
                        }
                        if(newDocs.length){
                            socket.emit('tumblrFeed', newDocs)
                        }
                        thisTime=new Date()
                    }
                }
            })
        }else{
            console.log("stream stop");
            socket.emit('tumblrFeedEnd', "true")
            delete store
            clearInterval(intervalCheck)
        }
    } , 1000);
}

router.get('/aggregate', validateProfile, (req, res) => {
    res.setHeader('Content-type', 'application/json')
    q=req.query.q
    var options = {
        'method': 'GET',
        'url': `http://172.31.43.159:6000/mentions/?q=${q}`,
        'headers': {
    }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.json(JSON.parse(response.body));
    });

})

module.exports = router;