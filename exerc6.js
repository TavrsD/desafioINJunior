/*
Escreva um programa que:
1. Solicite ao usuário um número inteiro positivo n, que representa o
número de termos que ele deseja ver da sequência de Fibonacci.
2. Implemente uma função recursiva chamada fibonacci que rece
um número n e retorna os n primeiros termos da sequência de
Fibonacci, onde:
○ Fibonacci(0) = 0
○ Fibonacci(1) = 1
○ Para n>1: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
3. Exiba os n primeiros termos da sequência de Fibonacci.
*/
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return fibonacci(num-1) + fibonacci(num-2);
  }
}

function fiboSequence(num) {
  const seq = [];
  for (let i = 1; i <= num; i++) {
    seq.push(fibonacci(i));
  }
  return seq;
}

rl.question(`Digite o numero de termos desejados para a sequência fibonacci: `, num => {

    if (isNaN(num)){
        console.log(`Entrada inválida.`)
    } else {
    num = Number(num);
    } if (!Number.isInteger(num) || num < 0) {
      console.log(`O número precisa ser um inteiro positivo`);
    } else {
      const fibo = fiboSequence(num);
      console.log(`A sequência de fibonacci de ${num} termos é: ${fibo}`);
    }

    rl.close();
});

