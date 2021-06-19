const http = require('http');
const express = require ('express');
const app = express();
const bodyParser = require('body-parser');

app.use((req,res,next)=>{
    res.send('<h1>denemeler</h1>');
});

app.listen(process.env.NODE_ENV || 3000);
