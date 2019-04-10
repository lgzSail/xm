const express=require('express');
var server=express();
server.listen(3001);
server.use(express.static('./public'));

const bodyParser=require('body-parser');
server.use(bodyParser.urlencoded({
  entended:false
}))

const origin=require('./routers/origin.js');
server.use('/index',origin);