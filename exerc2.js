/*
Escreva um programa que:
1. Solicite ao usuário um número inteiro positivo e calcule o seu
fatorial.
2. Pergunte ao usuário se ele quer calcular o fatorial de outro
número. Se o usuário digitar "S" ou “s”, o programa deve reiniciar e
permitir outro cálculo; se digitar "N" ou “n”, o programa deve
encerrar.
3. Valide a entrada do usuário para garantir que apenas números
inteiros positivos são aceitos. Se o usuário digitar um número
inválido, exiba uma mensagem de erro e peça a entrada
novamente.
*/
let keep = false;

do {
    const num = parseInt(prompt(`Digite um inteiro para calcular o fatorial`), 10);
    
    if (num <= 0 || isNaN(num)) {
        alert(`entrada inválida.`);
    } else {
        let result = num;
        for (i = num-1; i > 0; i--) {
            result = result*i;
        }
        alert(`O fatorial de ${num} é ${result}`);
    }
    
    let keepAsking = true;
    do {
        let ask = prompt(`Deseja continuar? (S ou N)`);
        if (ask === "s" || ask === "S") {
            keep = true;
            keepAsking = false;
        } else if(ask === "n" || ask === "N"){
            keep = false;
            keepAsking = false;
        } else {
            alert(`opção inválida.`);
        }
    } while (keepAsking);
} while (keep)

