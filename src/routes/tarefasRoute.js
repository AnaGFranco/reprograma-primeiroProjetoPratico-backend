const express = require('express') // puxar outro arquivo 

const router = express.Router(); //instanciar metodo router

const controller = require("../controllers/tarefasController") //casar a chama com o que foi contruido, pois o router só distribui

router.get("/", controller.get)
router.get("/concluido", controller.getByConcluido)
router.get("/duracao/buscar", controller.getDuracao)
router.get("/dataInclusao/teste", controller.getByDataInclusao)
router.get("/:id", controller.getById)
router.get("/buscar/:nomeBusca/", controller.getByColaborador)


module.exports = router
