var express = require('express');
var router = express.Router();
var request = require('request');

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

router.get('/reddit', (req, res) => {
    res.setHeader('Content-Type', 'application/json')

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

router.get('/youtube', (req, res) => {
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

router.get('/twitter', (req, res) => {
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

router.get('/tumblr', (req, res) => {
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

router.get('/aggregate', (req, res) => {
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
