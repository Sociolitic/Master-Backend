var express = require('express');
var router = express.Router();
const Users = require('../models/users');

router.post('/update', (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    Users.findOne({ email: data.user.email}, function (err, docs) {
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


module.exports = router;
