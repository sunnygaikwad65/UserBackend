const express = require('express');
const cors = require('cors');
const app=express();
const routes = require('./routes')
const port=9999;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json())
app.use(routes)


app.listen(port,()=>{
    console.log(`APP is runing on port ${port}`);
});