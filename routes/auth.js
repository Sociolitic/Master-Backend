var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");
const Users = require('../models/users');
let alerts = require('./mail');
var jwt = require('jsonwebtoken');

var serviceAccount = require(__dirname + "/key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

router.post('/verify', (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    admin.auth().verifyIdToken(data.user.userId).then((decodedToken) => {
        const uid = decodedToken.uid;
        console.log(uid);
        data.user.userId=uid
        data.user.plan="free"
        data.user.competitors=[]
        data.user.stage=1
        console.log(data);
        Users.findOne({ email: data.user.email}, function (err, docs) {
          if (err){
              console.log(err);
          }
          else{
              if(docs==null){
                Users.create(data.user, function (err, dbResult) {
                  if (err)
                      console.log(err);
                  console.log(dbResult)
                  alerts.informAdmin(`${data.user.name} just signed up for Sociolitic.`,false)
                  let authToken = jwt.sign(dbResult.toJSON(), 'socioliticSecret');
                  res.json({authToken: authToken, token: uid, stage: dbResult.stage});

              });
              }else{
                let authToken = jwt.sign(docs.toJSON(), 'socioliticSecret');
                res.json({authToken: authToken, token: uid, stage: docs.stage});
                console.log("User Already Exists");
              }
          }
        })
    })
    .catch((error) => {
        res.send(error)
    });
})

router.post('/fetch', (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    if(data.user){
        Users.findOne({ userId: data.user}, function (err, docs) {
            if (err){
                console.log(err);
            }
            else{
                res.json(docs)
            }
        })
    }else if(req.headers.authorization){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, 'socioliticSecret', function(err,decoded){
            if(err){
                return res.status(401).send({
                    message: 'Failed to authenticate token.'
                });
            }else{
                res.setHeader('Content-Type', 'application/json');
                Users.findById(decoded._id,(err,docs)=>{
                    if(err){
                        console.log(err);
                    }else{
                        res.json(docs)
                    }
                })
            }
        })
    }else{
        res.json({})
    }
})

router.post('/update', (req, res) => {
  data = JSON.parse(JSON.stringify(req.body))
  Users.findOne({ userId: data.user}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        docs.alerts = data.alerts
        docs.reports = data.reports
        docs.newsletters = data.newsletters
        docs.save()
        res.end("Done")
    }
})
})

module.exports = router;
