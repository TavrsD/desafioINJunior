/*
Escreva um programa para simular uma fila de espera em uma central
de atendimento ao cliente. O programa deve iniciar exibindo na tela um
menu interativo contendo a lista de todos os clientes esperando
atendimento, mostrando a posição ao lado do nome (ex.: 1o João, 2o
Maria, etc).
O menu deve permitir escolher entre as seguintes opções:
1 - “Novo Cliente”: Adiciona um novo cliente ao final da
(solicitando o nome do cliente).
2 - “Atender Cliente”: Retira o primeiro cliente da fila e exibe
nome do cliente que está sendo atendido.
3 - “Sair”: Encerra o programa.
O programa só deve ser encerrado ao escolher a opção 3. Caso
contrário, ele deve retornar ao menu principal.
*/

function showQueue (fila) {
  let responseList = [];
  for(let i = 0; i<fila.length; i++) {
    responseList.push(`${i+1}º ${fila[i]}`);
  }
  console.log(responseList);
}

function showOptions () {
  console.log("1 - Novo Cliente");
  console.log("2 - Atender Cliente");
  console.log("3 - Sair");
}

let option = 0;
let fila = [];

showQueue(fila);
showOptions();
