var express = require('express');
var router = express.Router();
var request = require('request');

// const Users = require('../models/users');
const youtube = require('../models/youtube');
const reddit = require('../models/redditData');

router.get('/instagram/:query', (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    var options = {
        'method': 'GET',
        'url': 'http://instagram:8000/search/'+req.params.query
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.send(response.body);
    });
})

router.get('/youtube',(req,res)=>{
    // data = JSON.parse(JSON.stringify(req.body))
    q=req.query.q
    var options = {
        'method': 'GET',
        'url': 'http://127.0.0.1:5000/youtube/search/?q='+q,  //Change to docker name
        'headers': {
    }
    };
    var stop=false
    request(options, function (error, response) {
        if (error){
            throw new Error(error)
        }else{
            console.log("DONE");
            stop=true
        }
    });
    var interval = setInterval(() => {
        if(stop){
            clearInterval(interval)
            res.end()
        }else{
            youtube.find({tag: q}, function (err, docs){
                if(err){
                    throw new Error(err)
                }else{
                    res.write(JSON.stringify(docs))
                }
            })
        }
    }, 1000);
})

router.get('/reddit', (req, res) => {
    q=req.query.q
    d2=new Date()
    var options = {
        'method': 'GET',
        'url': 'http://localhost:5000/reddit/search/?q=' + q + '&sort=hot&limit=7'  //Change to docker name
    };
    var stop=false
    request(options, function (error, response) {
        if (error){
            throw new Error(error)
        }else{
            console.log("DONE");
            stop=true
        }
    });
    reddit.find({tag: q, updatedAt : { $lte : d2}}, function (err, docs){
        if(err){
            throw new Error(err)
        }else{
            res.write(JSON.stringify(docs))
        }
    })
    d=new Date()
    var interval = setInterval(() => {
        if(stop){
            clearInterval(interval)
            res.end()
        }else{
            reddit.find({tag: q, updatedAt : { $gt : d}}, function (err, docs){
                d=new Date()
                if(err){
                    throw new Error(err)
                }else{
                    console.log(docs[0]);
                    if(docs[0]){
                        res.write(JSON.stringify(docs))
                    }
                }
            })
        }
    }, 1000);
    console.log(d,d2);
})

module.exports = router;
