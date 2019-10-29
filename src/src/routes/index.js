const express = require('express') // puxar outro arquivo 

const router = express.Router(); //instanciar metodo router

router.get("/", function(req, res) {
    res.status(200).send({
        title: "Reprograma turma Kelly",
        version: "0.0.1"
    })
    
})


module.exports = router

