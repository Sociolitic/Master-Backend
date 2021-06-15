var express = require('express');
var router = express.Router();
var request = require('request');

// const Users = require('../models/users');

router.get('/instagram/:query', (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    var options = {
        'method': 'GET',
        'url': 'http://localhost:8000/search/'+req.params.query
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.send(response.body);
    });

})

router.get('/instagram1/:query', (req, res) => {
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
router.get('/instagram2/:query', (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    var options = {
        'method': 'GET',
        'url': 'http://instagram/search/'+req.params.query
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.send(response.body);
    });
})


router.get('/instagram3/:query', (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    var options = {
        'method': 'GET',
        'url': 'instagram/search/'+req.params.query
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.send(response.body);
    });
})
router.get('/instagram4/:query', (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    var options = {
        'method': 'GET',
        'url': 'instagram:8000/search/'+req.params.query
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.send(response.body);
    });
})
router.get('/instagram5/:query', (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    var options = {
        'method': 'GET',
        'url': 'http://10.0.0.2:8000/search/'+req.params.query
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.send(response.body);
    });
})
router.get('/instagram6/:query', (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    var options = {
        'method': 'GET',
        'url': 'http://10.0.0.2/search/'+req.params.query
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.send(response.body);
    });
})
router.get('/cc/:query', (req, res) => {
    data = JSON.parse(JSON.stringify(req.body))
    var options = {
        'method': 'GET',
        'url': 'http://'+req.params.query + '/search/cat'
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.send(response.body);
    });
})

module.exports = router;
