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

exports.getDuracao =(req, res) =>{

    const duracao = tarefas.map((item) => {
        let dtSeparadaInclusao = item.dataInclusao.split('/')
        let novaDtInclusao = (dtSeparadaInclusao[2] + "-" + dtSeparadaInclusao[1] + "-" + dtSeparadaInclusao[0]);
        let dataConvertidaInclusao = new Date(novaDtInclusao)

        let dtSeparadaConclusao = item.dataConclusao.split('/')
        let novaDtConclusao = (dtSeparadaConclusao[2] + "-" + dtSeparadaConclusao[1] + "-" + dtSeparadaConclusao[0]);
        let dataConvertidaConclusao = new Date(novaDtConclusao)

         return item.duracao = calcularDuracao(dataConvertidaInclusao, dataConvertidaConclusao);
        
    })

    res.status(200).send(duracao)
}


function calcularDuracao(dataInclusao, dataConclusao) {
    let dateConclu = new Date(dataConclusao)
    let dateInclu= new Date(dataInclusao)

    let duracao = dateConclu - dateInclu;
    console.log(dateConclu + ' ' + dateInclu +' '+ duracao)

    return duracao;
}

// exports.getAge = (req, res) => {
//     const id = req.params.id
//     const aluna = alunas.find(item => item.id == id)
//     const dataNasc = aluna.dateOfBirth
//     const arrData = dataNasc.split("/")
//     const dia = arrData[0]
//     const mes = arrData[1]
//     const ano = arrData[2]
//     const idade = calcularIdade(ano, mes, dia)
//     res.status(200).send({ idade })
//   }
  
//   function calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc) {
//     const now = new Date()
//     const anoAtual = now.getFullYear()
//     const mesAtual = now.getMonth() + 1
//     const hoje = now.getDate()
  
//     let idade = anoAtual - anoDeNasc
  
//     if (mesAtual < mesDeNasc || (mesAtual == mesDeNasc && hoje < diaDeNasc)) {
//       idade -= 1
//     }
//     return idade
//   }

// function copy(o){
//     var copy = Object.create( Object.getPr(ototypeOf(o) );
//     var propNames = Object.getOwnPropertyNames(o);
//     propNames.forEach(function(name){
//       var desc = Object.getOwnPropertyDescriptor(o, name);
//       Object.defineProperty(copy, name, desc);
  
//     });
  
//     return copy;
//   }