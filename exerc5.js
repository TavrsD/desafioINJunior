/*
Elabore um algoritmo que peça para o usuário inserir um número
inteiro e realize o seguinte:
● Caso o valor seja divisível por 3, imprima “fizz
● Caso o valor seja divisível por 5 imprima “buzz”.
● Caso o valor seja divisível por 3 e 5, ao mesmo tempo, imprima
“fizzbuzz
● Caso contrário imprima nada.
*/
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Digite um número inteiro: `, num => {

    if (isNaN(num)){
        console.log(`Entrada inválida.`)
    } else {
    num = Number(num);
    } if (!Number.isInteger(num)) {
      console.log(`O número precisa ser inteiro`);
    } else {
      console.log(' ');
    }
    rl.close();
});

