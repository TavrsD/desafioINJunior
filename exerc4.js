/*
Elabore um algoritmo para ler um valor monetário em reais (R$) e
convertê-lo para as moedas euro (€) e dólar americano (US$),
considerando as seguintes taxas de câmbio:
● Taxa de câmbio para euro: €1 = R$6,10
● Taxa de câmbio para dólar: $1 = R$5,70
Imprima na tela o valor em reais inserido pelo usuário e suas
conversões para dólar americano e euro.
*/
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Insira o valor que deseja converter: R$`, valueReal => {
    const taxEuro = 6.1; 
    const taxDollar = 5.7;   

    if (isNaN(valueReal)){
        console.log(`Entrada inválida.`)
    } else {
    valueReal = parseFloat(valueReal).toFixed(2);
    console.log(`O valor R$${valueReal} equivale a:`);
    console.log(`€$${(valueReal*taxEuro).toFixed(2)}`);
    console.log(`$${(valueReal*taxDollar).toFixed(2)}`);
    }
    rl.close();
});

