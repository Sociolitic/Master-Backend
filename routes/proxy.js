request = require('request');
var express = require('express');
var router = express.Router();
const fs = require('fs')

router.get('/', async (req, res) => {
    uri="https://instagram.fblr20-1.fna.fbcdn.net/v/t51.2885-15/e35/185260984_1168695796911584_424208467754790296_n.jpg?tp=1&_nc_ht=instagram.fblr20-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=py2AWLpAveIAX9sVdpR&edm=ABZsPhsBAAAA&ccb=7-4&oh=2c54a54078cce5f321f978416c98a93b&oe=60C4FCDA&_nc_sid=4efc9f"
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Credentials', true)
    //   res.setHeader('Content-Type','image/jpeg')
      res.set({'Content-Type':'image/jpeg'})
    try{
        filename='\\test.jpeg'
        console.log(__dirname+filename);
        request(uri).pipe(fs.createWriteStream(__dirname + filename)).on('close', ()=>{
            res.sendFile(__dirname+filename,()=>{
                fs.unlinkSync(__dirname+filename)
            })
        });
    }catch(err){
      console.log(err);
    }
})


module.exports = router;