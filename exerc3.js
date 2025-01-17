/*
Crie uma função chamada verificarIdades que recebe um array
anos de nascimento de várias pessoas. A função deve calcular a idade
de cada pessoa com base no ano atual (inserido pelo usuário) e, para

cada idade, determinar se a pessoa é maior de idade (18 anos ou mais)
ou menor de idade (menos de 18 anos). A função deve retornar um array
contendo "maior" para pessoas maiores de idade e "menor" para
pessoas menores de idade, mantendo a ordem das idades verificada
Após isso, a função deve imprimir na tela uma mensagem para cada
pessoa, no formato:

Pessoa 1: Maior de idade
Pessoa 2: Menor de idade
(...)
*/
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificarIdades(bornYear) {
    const response = [];

    rl.question(`Digite o ano atual: `, now => {
        
        for (year of bornYear) {
            if ((now-year) >=18) {
                response.push("maior");
            } else {
                response.push("menor");
            }
        }
        for (i = 0; i < response.length; i++) {
                console.log(`Pessoa ${i+1}: ${response[i]}`)
        }
        rl.close();
    });
}
