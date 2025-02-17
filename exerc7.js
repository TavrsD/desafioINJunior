/*
Escreva um programa que verifique se uma frase é um palíndromo.
palíndromo é uma sequência que pode ser lida da mesma maneira da
esquerda para a direita e da direita para a esquerda.
Requisitos:
1. Solicite ao usuário uma frase.
2. Remova todos os espaços e ignore a diferença entre letras
maiúsculas e minúsculas.
3. Verifique se a frase é igual quando lida ao contrário e informe
ela é um palíndromo ou não.
Dica: Use toLowerCase() e split().
*/
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Digite a frase para verificação: `, frase => {
  let fraseSplit = frase.trim().replace(/[,.!?-]/g,"").toLowerCase().split(" ").join("");
  let fraseReverse = fraseSplit.split("").reverse().join(""); 

  if (fraseSplit === fraseReverse) {
    console.log(`A frase "${frase}" é um palíndromo. `);
  } else {
    console.log(`A frase "${frase}" não é um palíndromo. `);
  }
    rl.close();
});
