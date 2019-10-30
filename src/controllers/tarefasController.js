const tarefas = require("../model/tarefas.json")

exports.get =(req, res) =>{

    res.status(200).send(tarefas)

}

exports.getById = (req, res) => {
    const id = req.params.id
    const tarefa = tarefas.find(tarefa => tarefa.id == id)
    
    res.status(200).send(tarefa)
}