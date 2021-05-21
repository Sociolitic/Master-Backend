var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");
const Users = require('../models/users');

var serviceAccount = require(__dirname + "/key.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

router.post('/verify', (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    admin.auth().verifyIdToken(data.user.userId).then((decodedToken) => {
        const uid = decodedToken.uid;
        console.log(uid);
        res.send(uid);
        data.user.userId=uid
        data.user.pro=false
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
              });
              }else{
                console.log("User Already Exists");
              }
          }
        })
    })
    .catch((error) => {
        res.send(error)
    });
})


module.exports = router;
