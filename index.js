// const uri = "mongodb+srv://stockapp:88888888@cluster0.o8iuu.mongodb.net/smmpanel?authSource=admin&replicaSet=atlas-yebdcz-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
const uri = "mongodb+srv://KokilaReddy:KokilaReddy@cluster0.5nrpf.mongodb.net/Social_media_data";
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const port = 8080
var multer = require('multer');
var upload = multer();
app.use(express.urlencoded({ extended: true })); 
app.use(upload.array()); 
app.use(express.json()); 
var cors = require('cors')
app.use(cors())
app.use(require('express-status-monitor')());
var request = require('request');
const path = require('path')

let alerts = require('./routes/mail');
app.use('/mail', alerts);

let paymentsRouter = require('./routes/payments');
app.use('/pay', paymentsRouter);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
    console.log('Connected')
}).catch(err => console.log(err))

app.use(express.urlencoded({ extended: true })); 
app.use(upload.array()); 
app.use(express.json()); 
app.use(cors())
let authRouter = require('./routes/auth');
app.use('/auth', authRouter);
let brandRouter = require('./routes/brand');
app.use('/brand', brandRouter);
let dataRouter = require('./routes/data');
app.use('/data', dataRouter);
let proxyRouter = require('pass-cors');
app.use('/proxy', proxyRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT||port, () => {
    console.log(`Example app listening on 8080`)
    // alerts.informAdmin("Sociolitic Server up", true)
})