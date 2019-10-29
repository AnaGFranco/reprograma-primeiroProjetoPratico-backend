const express = require('express') // puxar outro arquivo 

const router = express.Router(); //instanciar metodo router

const controller = require("../controllers/tarefasController") //casar a chama com o que foi contruido, pois o router só distribui

router.get("/", controller.get)
router.get("/:id", controller.getById)

module.exports = router
