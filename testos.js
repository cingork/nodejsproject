const http = require('http');
const path =require('path');
const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const mainRoutes = require('./routes/main');
app.use(mainRoutes);
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use(express.static(path.join(__dirname,'public')));

app.listen(process.env.NODE_ENV || 3000);
