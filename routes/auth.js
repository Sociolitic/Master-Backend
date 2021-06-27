var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");
const Users = require('../models/users');
let alerts = require('./mail');

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
                  res.json({token: uid, stage: dbResult.stage});
              });
              }else{
                console.log(docs.stage);
                if(docs.stage == 1){
                  res.json({token: uid, stage: docs.stage});
                }else{
                  res.json({token: uid, stage: docs.stage});
                }
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
      Users.findOne({ userId: data.user}, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            res.json(docs)
        }
    })
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
