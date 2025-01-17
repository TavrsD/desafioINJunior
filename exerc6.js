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

rl.question(`Digite o numero de termos desejados para a sequência fibonacci: `, num => {

    if (isNaN(num)){
        console.log(`Entrada inválida.`)
    } else {
    num = Number(num);
    } if (!Number.isInteger(num) || num < 0) {
      console.log(`O número precisa ser um inteiro positivo`);
    } else {
      let fiboSeq = [];
      console.log(`A sequência de fibonacci de ${num} termos é: ${fiboSeq}`);
    }
    rl.close();
});

