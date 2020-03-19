var express = require('express')
var app = new express();
app.use('/', express.static('./'));
app.listen('4001',()=>{
    console.log("Server listening to 4001 ") 
})