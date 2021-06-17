var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
var request = require('request');

let transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "admin@nbot.live",
      pass: "rtH7azVG8RWD", 
    },
});
  
function sendMail(to,title,data){
    transporter.sendMail({
      from: 'N-bot <admin@nbot.live>',
      to: to,
      subject: title,
      html: data
    }, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}

function alertAdmin(msg){
    sendMail("nithin.s491@gmail.com","Alert !",msg)
}

router.post('/send', function(req, res, next) {
    data = JSON.parse(JSON.stringify(req.body))
    console.log(data.to);
	res.end("Done");
});

const telegram = "https://api.telegram.org/bot1804564470:AAHCRl5B3ybBQBuq1TAgYk-NsxlzfJYfZ7g/"

function informAdmin(msg, important=false){
  var options = {
    'method': 'POST',
    'url': telegram + 'sendMessage?chat_id=755644285&text=' + msg + '&disable_notification=' + !important,
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error){
      console.log(error);
    }else{
      console.log(response.body);
    }
  });  
}

router.alertAdmin=alertAdmin;
router.sendMail=sendMail;
router.informAdmin=informAdmin;

module.exports = router;
