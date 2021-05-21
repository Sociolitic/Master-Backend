var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

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

router.alertAdmin=alertAdmin;
router.sendMail=sendMail;

module.exports = router;
