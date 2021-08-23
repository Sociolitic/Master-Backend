var express = require('express');
var router = express.Router();
var request = require('request');

// const Users = require('../models/users');
const youtube = require('../models/youtube');
const youtubeCount = require('../models/youtubeCount');

const twitter = require('../models/twitter');

const reddit = require('../models/redditData');

const io = require('socket.io')(7000, {
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket)=>{
    console.log('a user connected', socket.id);
    socket.on('reddit', (data)=>{
        redditStream(data,socket)
    })
    socket.on('twitter', (data)=>{
        twitterStream(data,socket)
    })
    socket.on('twitterMore', (data)=>{
        twitterStreamMore(data,socket)
    })
});

router.get('/youtube', (req, res) => {
    q=req.query.q
    limit=0
    d2=new Date()
    youtubeCount.find({tag: q}, function (err, docs){
        if(err){
            throw new Error(err)
        }else{
            if(docs.length>0){
                limit = docs[0].Total_reviews
            }else{
                limit = 5
            }
            var options
            var stop=false
            res.writeHead(200, {
                'Transfer-Encoding': 'chunked',
                'X-Content-Type-Options': 'nosniff'});
            if(req.query.more && req.query.more == 1){
                console.log("MOREE",limit);
                options = {
                    'method': 'GET',
                    'url': `http://13.234.201.120:5000/youtube/search/?q=${q}&limit=${limit+5}`  //Change to docker name
                };
                request(options, function (error, response) {
                    if (error){
                        throw new Error(error)
                    }else{
                        console.log("DONE");
                        stop=true
                    }
                });
                var done=true
                var interval = setInterval(() => {
                    if(stop){
                        clearInterval(interval)
                        res.end()
                    }else{
                        if(done){
                            youtube.find({tag: q, updatedAt : { $gt : d2}}, function (err, docs){
                                done=false
                                if(err){
                                    throw new Error(err)
                                }else{
                                    done=true
                                    if(docs[0]){
                                        res.write(JSON.stringify(docs))
                                        d2=docs[docs.length-1].updatedAt
                                        for(e of docs){
                                            console.log(e.title);
                                        }
                                    }
                                }
                            })
                        }
                    }
                }, 1000);
            }else{
                console.log("PREVV");
                options = {
                    'method': 'GET',
                    'url': `http://13.234.201.120:5000/youtube/search/?q=${q}&limit=${limit}`  //Change to docker name
                };
                request(options, function (error, response) {
                    if (error){
                        throw new Error(error)
                    }else{
                        console.log("DONE");
                        stop=true
                    }
                });
                
                youtube.find({tag: q, updatedAt : { $lte : d2}}, function (err, docs){
                    if(err){
                        throw new Error(err)
                    }else{
                        if(docs[0]){
                            res.write(JSON.stringify(docs))
                        }
                    }
                })
                var done=true
                var interval = setInterval(() => {
                    if(done){
                        youtube.find({tag: q, updatedAt : { $gt : d2}}, function (err, docs){
                            done=false
                            if(err){
                                throw new Error(err)
                            }else{
                                done=true
                                if(docs[0]){
                                    res.write(JSON.stringify(docs))
                                    d2=docs[docs.length-1].updatedAt
                                    for(e of docs){
                                        console.log(e.title);
                                    }
                                    if(stop){
                                        res.end()
                                    }
                                }
                            }
                        })
                    }
                    if(stop){
                        clearInterval(interval)
                    }
                }, 1000);
            }
           
            
        }
    })
})

router.get('/twitter', (req, res) => {
    q=req.query.q
    limit=0
    d2=new Date()
    twitterCount.find({tag: q}, function (err, docs){
        if(err){
            throw new Error(err)
        }else{
            if(docs.length>0){
                limit = docs[0].Total_reviews
            }else{
                limit = 5
                req.query.more = 1
            }
            var options
            var stop=false
            res.writeHead(200, {
                'Transfer-Encoding': 'chunked',
                'X-Content-Type-Options': 'nosniff'});
            if(req.query.more && req.query.more == 1){
                limit=5
                options = {
                    'method': 'GET',
                    'url': `http://13.234.201.120:5000/twitter/search/?q=${q}&limit=${limit}`  //Change to docker name
                };
                request(options, function (error, response) {
                    if (error){
                        throw new Error(error)
                    }else{
                        console.log("DONE");
                        stop=true
                    }
                });
                var done=true
                var interval = setInterval(() => {
                    if(done){
                        twitter.find({tag: q, updatedAt : { $gt : d2}}, function (err, docs){
                            done=false
                            if(err){
                                throw new Error(err)
                            }else{
                                done=true
                                if(docs[0]){
                                    res.write(JSON.stringify(docs))
                                    d2=docs[docs.length-1].updatedAt
                                    for(e of docs){
                                        console.log(e.title);
                                    }
                                    if(stop){
                                        res.end()
                                    }
                                }
                            }
                        })
                    }
                    if(stop){
                        clearInterval(interval)
                    }
                }, 1000);
            }else{
                console.log("PREVV",limit);
                twitter.find({tag: q, updatedAt : { $lte : d2}}, function (err, docs){
                    done=false
                    if(err){
                        throw new Error(err)
                    }else{
                        done=true
                        if(docs[0]){
                            res.write(JSON.stringify(docs))
                            for(e of docs){
                                console.log(e.text);
                            }
                            res.end()
                        }
                    }
                })
            }
           
            
        }
    })
})

router.get('/instagram', (req, res) => {
    q=req.query.q
    limit=0
    d2=new Date()
    youtubeCount.find({tag: q}, function (err, docs){
        if(err){
            throw new Error(err)
        }else{
            if(docs.length>0){
                limit = docs[0].Total_reviews
            }else{
                limit = 5
            }
            var options
            var stop=false
            res.writeHead(200, {
                'Transfer-Encoding': 'chunked',
                'X-Content-Type-Options': 'nosniff'});
            if(req.query.more && req.query.more == 1){
                console.log("MOREE",limit);
                options = {
                    'method': 'GET',
                    'url': `http://13.234.201.120:5000/youtube/search/?q=${q}&limit=${limit+5}`  //Change to docker name
                };
                request(options, function (error, response) {
                    if (error){
                        throw new Error(error)
                    }else{
                        console.log("DONE");
                        stop=true
                    }
                });
                var done=true
                var interval = setInterval(() => {
                    if(stop){
                        clearInterval(interval)
                        res.end()
                    }else{
                        if(done){
                            youtube.find({tag: q, updatedAt : { $gt : d2}}, function (err, docs){
                                done=false
                                if(err){
                                    throw new Error(err)
                                }else{
                                    done=true
                                    if(docs[0]){
                                        res.write(JSON.stringify(docs))
                                        d2=docs[docs.length-1].updatedAt
                                        for(e of docs){
                                            console.log(e.title);
                                        }
                                    }
                                }
                            })
                        }
                    }
                }, 1000);
            }else{
                console.log("PREVV");
                options = {
                    'method': 'GET',
                    'url': `http://13.234.201.120:5000/youtube/search/?q=${q}&limit=${limit}`  //Change to docker name
                };
                request(options, function (error, response) {
                    if (error){
                        throw new Error(error)
                    }else{
                        console.log("DONE");
                        stop=true
                    }
                });
                
                youtube.find({tag: q, updatedAt : { $lte : d2}}, function (err, docs){
                    if(err){
                        throw new Error(err)
                    }else{
                        if(docs[0]){
                            res.write(JSON.stringify(docs))
                        }
                    }
                })
                var done=true
                var interval = setInterval(() => {
                    if(done){
                        youtube.find({tag: q, updatedAt : { $gt : d2}}, function (err, docs){
                            done=false
                            if(err){
                                throw new Error(err)
                            }else{
                                done=true
                                if(docs[0]){
                                    res.write(JSON.stringify(docs))
                                    d2=docs[docs.length-1].updatedAt
                                    for(e of docs){
                                        console.log(e.title);
                                    }
                                    if(stop){
                                        res.end()
                                    }
                                }
                            }
                        })
                    }
                    if(stop){
                        clearInterval(interval)
                    }
                }, 1000);
            }
           
            
        }
    })
})

router.get('/tumblr', (req, res) => {
    q=req.query.q
    limit=0
    d2=new Date()
    youtubeCount.find({tag: q}, function (err, docs){
        if(err){
            throw new Error(err)
        }else{
            if(docs.length>0){
                limit = docs[0].Total_reviews
            }else{
                limit = 5
            }
            var options
            var stop=false
            res.writeHead(200, {
                'Transfer-Encoding': 'chunked',
                'X-Content-Type-Options': 'nosniff'});
            if(req.query.more && req.query.more == 1){
                console.log("MOREE",limit);
                options = {
                    'method': 'GET',
                    'url': `http://13.234.201.120:5000/youtube/search/?q=${q}&limit=${limit+5}`  //Change to docker name
                };
                request(options, function (error, response) {
                    if (error){
                        throw new Error(error)
                    }else{
                        console.log("DONE");
                        stop=true
                    }
                });
                var done=true
                var interval = setInterval(() => {
                    if(stop){
                        clearInterval(interval)
                        res.end()
                    }else{
                        if(done){
                            youtube.find({tag: q, updatedAt : { $gt : d2}}, function (err, docs){
                                done=false
                                if(err){
                                    throw new Error(err)
                                }else{
                                    done=true
                                    if(docs[0]){
                                        res.write(JSON.stringify(docs))
                                        d2=docs[docs.length-1].updatedAt
                                        for(e of docs){
                                            console.log(e.title);
                                        }
                                    }
                                }
                            })
                        }
                    }
                }, 1000);
            }else{
                console.log("PREVV");
                options = {
                    'method': 'GET',
                    'url': `http://13.234.201.120:5000/youtube/search/?q=${q}&limit=${limit}`  //Change to docker name
                };
                request(options, function (error, response) {
                    if (error){
                        throw new Error(error)
                    }else{
                        console.log("DONE");
                        stop=true
                    }
                });
                
                youtube.find({tag: q, updatedAt : { $lte : d2}}, function (err, docs){
                    if(err){
                        throw new Error(err)
                    }else{
                        if(docs[0]){
                            res.write(JSON.stringify(docs))
                        }
                    }
                })
                var done=true
                var interval = setInterval(() => {
                    if(done){
                        youtube.find({tag: q, updatedAt : { $gt : d2}}, function (err, docs){
                            done=false
                            if(err){
                                throw new Error(err)
                            }else{
                                done=true
                                if(docs[0]){
                                    res.write(JSON.stringify(docs))
                                    d2=docs[docs.length-1].updatedAt
                                    for(e of docs){
                                        console.log(e.title);
                                    }
                                    if(stop){
                                        res.end()
                                    }
                                }
                            }
                        })
                    }
                    if(stop){
                        clearInterval(interval)
                    }
                }, 1000);
            }
           
            
        }
    })
})

function redditStream(query,socket){
    limit=100
    var stop= false
    thisTime=new Date()
    options = {
        'method': 'GET',
        'url': `http://13.234.201.120:5000/reddit/search/?q=${query}&sort=new&limit=${limit}`
    };
    request(options, function (error, response) {
        if (error){
            throw new Error(error)
        }else{
            stop=true
        }
    });

    // Old data
    reddit.find({tag: query, updatedAt : { $lte : thisTime}}, function (err, docs){
        if(err){
            throw new Error(err)
        }else{
            if(docs[0]){
                socket.emit('redditFeed', docs)
            }
        }
    })

    // New data
    var intervalCheck = setInterval(() => {
        if(!stop){
            reddit.find({tag: query, updatedAt : { $gte : thisTime}}, function (err, docs){
                if(err){
                    throw new Error(err)
                }else{
                    console.log(docs);
                    if(docs[0]){
                        socket.emit('redditFeed', docs)
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

function twitterStream(query,socket){
    var store={}
    limit=15
    var stop= false
    thisTime=new Date()
    options = {
        'method': 'GET',
        'url': `http://13.234.201.120:5000/twitter/search/?q=${query}&limit=${limit}`
    };
    request(options, function (error, response) {
        if (error){
            throw new Error(error)
        }else{
            stop=true
        }
    });

    // Old data
    twitter.find({tag: query, updatedAt : { $lte : thisTime}}, function (err, docs){
        if(err){
            throw new Error(err)
        }else{
            if(docs[0]){
                socket.emit('twitterFeed', docs)
                for(data of docs){
                    store[data._id]=1
                }
            }
        }
    })

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

function twitterStreamMore(query,socket){
    var store={}
    limit=30
    var stop= false
    thisTime=new Date()
    options = {
        'method': 'GET',
        'url': `http://13.234.201.120:5000/twitter/search/?q=${query}&limit=${limit}`
    };
    request(options, function (error, response) {
        if (error){
            throw new Error(error)
        }else{
            stop=true
        }
    });

    // Old data
    twitter.find({tag: query, updatedAt : { $lte : thisTime}}, function (err, docs){
        if(err){
            throw new Error(err)
        }else{
            if(docs[0]){
                for(data of docs){
                    store[data._id]=1
                }
            }
        }
    })

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

router.get('/aggregate', (req, res) => {
    res.setHeader('Content-type', 'application/json')
    q=req.query.q
    var options = {
        'method': 'GET',
        'url': `http://13.234.201.120:6000/mentions/?q=${q}`,
        'headers': {
    }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.json(JSON.parse(response.body));
    });

})

module.exports = router;
