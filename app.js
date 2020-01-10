const express = require('express') ;
const app = express() ; 


app.get('/' , (req, res , next)=> {
    res.send({response: 'hello'})
})


module.exports = app ;

