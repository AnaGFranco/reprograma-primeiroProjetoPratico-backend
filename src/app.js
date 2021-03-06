const express = require('express') // puxar outro arquivo 

const app = express() //instanciar 

const index = require("./routes/index")
const tarefas = require("./routes/tarefasRoute")

app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*")

        res.header("Acess-Control-Allow-Origin","*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Acept"

    )
        next()
})

app.use("/",index)
app.use("/tarefas", tarefas)

module.exports = app // exportar para qualquer parte da aplicação, ou seja disponivel para uso em qualquer lugar.


