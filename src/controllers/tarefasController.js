const tarefas = require("../model/tarefas.json")

exports.get =(req, res) =>{

    res.status(200).send(tarefas)

}

exports.getById = (req, res) => {
    const id = req.params.id
    const tarefa = tarefas.find(tarefa => tarefa.id == id)
    
    res.status(200).send(tarefa)
}

exports.getByConcluido =(req, res) =>{

    const conc = tarefas.filter((item) => {
        
        return item.concluido === "true";
    })

    res.status(200).send(conc)

}

exports.getByColaborador =(req, res) =>{
    
    const nome = req.params.nomeBusca
    const pessoa = tarefas.filter(pessoa => pessoa.nomeColaborador === nome)

    res.status(200).send(pessoa)

}