const express = require('express') ;
const app = express() ; 
const customerRoute = require('./router/customerRoute') ;

app.use('/api/v1/customer' , customerRoute );


module.exports = app ;

