const express = require('express') ;
const router = express.Router() ;


router.get('/' , (req,res , next)=> {

    let customer = {name: "sbu" }

    
        res.status(400).send({error:"bad request"}) ;
})


module.exports = router ;