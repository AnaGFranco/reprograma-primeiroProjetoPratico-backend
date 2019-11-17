**Objetivo deste projeto**

- Add o arquivo .gitignore;
- Organização da arquitetura;
- Criar o servidor;
- Criar Rota, Controller e Model;
- Retornar lista de tarefas;
- Retornar tarefas por variados tipos de filtros.

**Tecnologia **
- Node JS.

**Para a execução do codigo:**

Será necessario clonar este repositório:  
  
 **1º** Acessar o git bash;  
  
 **2º** Digite o comando:  
   
` git clone https://github.com/AnaGFranco/reprograma-projetopratico-backend.git   `

Após clonar, acesse o novo diretório criado e excute a instalação das dependencias com o comando:
  
`   npm install      `

**Endpoints**

GET / => Exibe todas as tarefas

GET /:id => Exibe os dados de acordo com o ID inserido

GET tarefas/concluido => Exibe apenas as tarefas concluídas

GET tarefas/buscar/:nomeBusca/=> Filtra as informações através do colaborador

GET tarefas/dataInclusao/ordenar => Ordena a lista de acordo com as datas mais recentes

GET tarefas/duracaoTarefa/filtrar => Calcula e exibe a duração em dias da tarefa.
