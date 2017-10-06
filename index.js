const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongodb');

const app = express();

const port =3000;

app.get('/', (req,res)=>{
    res.send('Invalid Endpoint');
});

app.listen(port, ()=>{
    console.log("Server started at port", port);
});