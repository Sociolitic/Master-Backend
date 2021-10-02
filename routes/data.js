var express = require('express');
var router = express.Router();
var request = require('request');
var jwt = require('jsonwebtoken');
const profiles = require('../models/profiles');
const Users = require('../models/users');
const { informAdmin } = require('./mail')

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
            if(docs.users.includes(req.decoded._id) && docs.quota>0){
                req.profile = docs
                next()
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

io.use(function(socket, next){
    if (socket.handshake.query && socket.handshake.query.token){
        jwt.verify(socket.handshake.query.token, 'socioliticSecret', function(err, decoded) {
            if (err) return next(new Error('Authentication error'));
            socket.decoded = decoded;
            Users.findById(decoded._id, function(err, user){
                if(err){
                    return next(new Error('Authentication error'));
                }else{
                    socket.profiles = user.profiles
                    next()
                }
            })
        });
        }
        else {
            socket.emit('error', 'No token provided')
            next(new Error('Authentication error'));
        }    
    })
    .on('connection', function(socket) {
        console.log('a user connected', socket.id);
        socket.on('reddit', (profileId)=>{
            if(socket.profiles.includes(profileId)){
                redditStream(profileId,socket)
            }else{
                socket.emit('error','Not authorised to acccess this profile')
            }
        })
        socket.on('twitter', (profileId)=>{
            if(socket.profiles.includes(profileId)){
                twitterStream(profileId,socket)
            }else{
                socket.emit('error','Not authorised to acccess this profile')
            }
        })
        socket.on('youtube', (profileId)=>{
            if(socket.profiles.includes(profileId)){
                youtubeStream(profileId,socket)
            }else{
                socket.emit('error','Not authorised to acccess this profile')
            }
        })
        socket.on('tumblr', (profileId)=>{
            if(socket.profiles.includes(profileId)){
                tumblrStream(profileId,socket)
            }else{
                socket.emit('error','Not authorised to acccess this profile')
            }
        })
        socket.on('redditCombined', (profileId)=>{
            if(socket.profiles.includes(profileId)){
                redditStream(profileId,socket,'combined')
            }else{
                socket.emit('error','Not authorised to acccess this profile')
            }
        })
        socket.on('twitterCombined', (profileId)=>{
            if(socket.profiles.includes(profileId)){
                twitterStream(profileId,socket,'combined')
            }else{
                socket.emit('error','Not authorised to acccess this profile')
            }
        })
        socket.on('youtubeCombined', (profileId)=>{
            if(socket.profiles.includes(profileId)){
                youtubeStream(profileId,socket,'combined')
            }else{
                socket.emit('error','Not authorised to acccess this profile')
            }
        })
        socket.on('tumblrCombined', (profileId)=>{
            if(socket.profiles.includes(profileId)){
                tumblrStream(profileId,socket,'combined')
            }else{
                socket.emit('error','Not authorised to acccess this profile')
            }
        })
        socket.on('combinedStream', (profileId)=>{
            if(socket.profiles.includes(profileId)){
                redditStream(profileId,socket,'combined')
                twitterStream(profileId,socket,'combined')
                youtubeStream(profileId,socket,'combined')
                tumblrStream(profileId,socket,'combined')
            }else{
                socket.emit('error','Not authorised to acccess this profile')
            }
        })
        socket.on('refresh', (data)=>{
            Users.findById(socket.decoded._id, function(err, user){
                if(err){
                    return next(new Error('Authentication error'));
                }else{
                    socket.profiles = user.profiles
                }
            })
        })
});

router.get('/reddit', validateProfile, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    // Old data
    reddit.find({tag: req.profile.brand, updatedAt : { $lte : new Date()}}, function (err, docs){
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
    youtube.find({tag: req.profile.brand, updatedAt : { $lte : new Date()}}, function (err, docs){
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
    twitter.find({tag: req.profile.brand, updatedAt : { $lte : new Date()}}, function (err, docs){
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
    tumblr.find({tag: req.profile.brand, updatedAt : { $lte : new Date()}}, function (err, docs){
        if(err){
            throw new Error(err)
        }else{
            if(docs[0]){
                res.json(docs)
            }
        }
    })
})

async function redditStream(query,socket,streamEvent='reddit'){
    query = await getProfileDetails(query)
    query = query.brand;
    var store={}
    limit=50
    var stop= false
    thisTime=new Date()
    options = {
        'method': 'GET',
        'url': `http://data:5000/reddit/search/?q=${query}&sort=new&limit=${limit}`
    };
    request(options, function (error, response) {
        if (error){
            console.log(111,error)
            stop=true
            socket.emit('error',{
                err: "Socket overload. Try again"
            })
            informAdmin(JSON.stringify(error),true)
        }else{
            stop=true
        }
    });

    // New data
    var intervalCheck = setInterval(() => {
        if(!stop && socket.connected){
            reddit.find({tag: query, updatedAt : { $gte : thisTime}}, function (err, docs){
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
                            socket.emit(`${streamEvent}Feed`, newDocs)
                        }
                        thisTime=new Date()
                    }
                }
            })
        }else{
            console.log("reddit stream stop for",socket.id);
            socket.connected && socket.emit(`combinedStreamEnd`, "reddit")
            clearInterval(intervalCheck)
        }
    } , 500);
}

async function twitterStream(query,socket,streamEvent='twitter'){
    query = await getProfileDetails(query)
    query = query.brand;
    var store={}
    limit=50
    var stop= false
    thisTime=new Date()
    options = {
        'method': 'GET',
        'url': `http://data:5000/twitter/search/?q=${query}&limit=${limit}`
    };
    request(options, function (error, response) {
        if (error){
            console.log(270,JSON.stringify(error))
            stop=true
            socket.emit('error',{
                err: "Socket overload. Try again"
            })
            // informAdmin(JSON.stringify(error),true)
        }else{
            stop=true
            console.log(JSON.stringify(response));
            // informAdmin(JSON.stringify(response),true)
        }
    });

    // New data
    var intervalCheck = setInterval(() => {
        if(!stop && socket.connected){
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
                            socket.emit(`${streamEvent}Feed`, newDocs)
                        }
                        thisTime=new Date()
                    }
                }
            })
        }else{
            console.log(streamEvent," stream stop",socket.id);
            socket.connected && socket.emit(`combinedStreamEnd`, "twitter")
            delete store
            clearInterval(intervalCheck)
        }
    } , 1000);
}

async function youtubeStream(query,socket,streamEvent='youtube'){
    query = await getProfileDetails(query)
    query = query.brand;
    var store={}
    limit=30
    var stop= false
    thisTime=new Date()
    options = {
        'method': 'GET',
        'url': `http://data:5000/youtube/search/?q=${query}&limit=${limit}`
    };
    request(options, function (error, response) {
        if (error){
            console.log(111,error)
            stop=true
            socket.emit('error',{
                err: "Socket overload. Try again"
            })
            informAdmin(JSON.stringify(error),true)
        }else{
            stop=true
        }
    });

    // New data
    var intervalCheck = setInterval(() => {
        if(!stop && socket.connected){
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
                            socket.emit(`${streamEvent}Feed`, newDocs)
                        }
                        thisTime=new Date()
                    }
                }
            })
        }else{
            console.log(streamEvent, " stream stop ",socket.id);
            socket.connected && socket.emit(`combinedStreamEnd`, "youtube")
            delete store
            clearInterval(intervalCheck)
        }
    } , 1000);
}

async function tumblrStream(query,socket,streamEvent='tumblr'){
    query = await getProfileDetails(query)
    query = query.brand;
    var store={}
    limit=30
    var stop= false
    thisTime=new Date()
    options = {
        'method': 'GET',
        'url': `http://data:5000/tumblr/search/?q=${query}&limit=${limit}`
    };
    request(options, function (error, response) {
        if (error){
            informAdmin(JSON.stringify(error),true)
            stop=true
            socket.emit('error',{
                err: "Socket overload. Try again"
            })
            console.log(111,error)
        }else{
            stop=true
        }
    });

    // New data
    var intervalCheck = setInterval(() => {
        if(!stop && socket.connected){
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
                            socket.emit(`${streamEvent}Feed`, newDocs)
                        }
                        thisTime=new Date()
                    }
                }
            })
        }else{
            console.log(streamEvent,"stream stop",socket.id);
            socket.connected && socket.emit(`combinedStreamEnd`, "tumblr")
            delete store
            clearInterval(intervalCheck)
        }
    } , 1000);
}

router.get('/aggregate', validateProfile, (req, res) => {
    res.setHeader('Content-type', 'application/json')
    q=req.profile.brand
    var options = {
        'method': 'GET',
        'url': `http://data:5000/mentions/?q=${q}`,
        'headers': {
    }
    };
    request(options, function (error, response) {
        if (error) informAdmin(JSON.stringify(error));
        res.json(JSON.parse(response.body));
    });

})

router.post('/status',(req,res)=>{
    res.setHeader('Content-type', 'application/json')
    var options = {
        'method': 'GET',
        'url': `http://data:5000`,
        'headers': {
    }
    };
    request(options, function (error, response) {
        if (error) informAdmin(JSON.stringify(error));
        res.json(response.body);
    });
})


module.exports = router;