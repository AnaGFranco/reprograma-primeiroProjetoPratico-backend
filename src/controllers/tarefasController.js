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
exports.getByDataInclusao =(req, res) =>{

    let teste = tarefas.sort((a,b) => {   
        let primeiraDataA = a.dataInclusao.split('/')
        let novaDateA = (primeiraDataA[2] + "-" + primeiraDataA[1] + "-" + primeiraDataA[0]);
        let dataConvertidaA = new Date(novaDateA)

        const primeiraDataB = b.dataInclusao.split('/')
        let novaDateB = (primeiraDataB[2] + "-" + primeiraDataB[1] + "-" + primeiraDataB[0]);
        let dataConvertidaB = new Date(novaDateB)

        if (dataConvertidaA < dataConvertidaB) { return -1; }
        if (dataConvertidaA > dataConvertidaB) { return 1; }
        return 0;

    })
    

    res.status(200).send(teste)
}

exports.getDiferencaDias = (req, res) => {
    tarefas.forEach(item => {
      // element.outraChave = "a";
      const diferencaTempo = Math.abs(
        new Date(
            item.dataConclusao.split("/")[2],
            item.dataConclusao.split("/")[1],
            item.dataConclusao.split("/")[0]
        ) -
          new Date(
            item.dataInclusao.split("/")[2],
            item.dataInclusao.split("/")[1],
            item.dataInclusao.split("/")[0]
          )
      );
      const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));
      item.tempoLevado = diferencaDias;
    });
    res.status(200).send(tarefas);
};