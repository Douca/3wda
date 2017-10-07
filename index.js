const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('config');
const assert = require('assert');
const passport = require('passport');

const app = express();

//Routes
const users = require('./routes/users');


// Port Number
const port =3000;

// CORS Middleware
app.use(cors());

// connect to mongo
mongoose.Promise = global.Promise;
mongoose.connect(config.DBMongo, {
    useMongoClient: true
});
// Use connect method to connect to the server
// mongo connected successfully
mongoose.connection.on('connected', () => {
    console.log('connected to MongoDB on: ' + config.DBMongo);
  });
  // Mongo connection error
  mongoose.connection.on('error', (err) => {
    console.log('connection error: ' + config.DBMongo + err);
  });
  
  
// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Use Routes
app.use('/users', users);

// Root Route
app.get('/', (req,res)=>{
    res.send('Invalid Endpoint');
});

app.listen(port, ()=>{
    console.log("Server started at port", port);
});