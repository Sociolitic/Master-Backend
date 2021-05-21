const uri = "mongodb+srv://stockapp:88888888@cluster0.o8iuu.mongodb.net/smmpanel?authSource=admin&replicaSet=atlas-yebdcz-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
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
var request = require('request');
const path = require('path')
let mailRouter = require('./routes/mail');
app.use('/mail', mailRouter);

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

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT||port, () => console.log(`Example app listening on 8080`))