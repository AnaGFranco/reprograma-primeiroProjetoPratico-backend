const express = require('express') // puxar outro arquivo 

const router = express.Router(); //instanciar metodo router

router.get("/", function(req, res) {
    res.status(200).send({
        title: "Primeiro projeto pratico",
        version: "0.0.1"
    })
    
})


module.exports = router

