/*
Escreva um programa em que o usuário insira os coeficientes a, b e
de uma equação quadrática da forma:
ax^2 + bx + c = 0

O programa deve:
1. Calcular o discriminante (Δ) pela fórmula:
Δ = b² − 4ac

2. Avaliar o valor de Δ para determinar o número de raízes reais:
○ Se Δ > 0, exibir as duas raízes reais e distintas.
○ Se Δ = 0, exibir uma raiz real (raiz dupla).
○ Se Δ < 0, informar que a equação não possui raízes reais.

3. Usar a fórmula de Bhaskara para calcular as raízes (caso existam)
e imprimir na tela tais raízes:

    x1 = (-b +sqrt(b²-4ac)) / 2a       x2 = (-b -sqrt(b²-4ac)) / 2a
*/

alert("calcula raízes de funções quadráticas no formato ax² + bx + c = 0");

const coefA = parseFloat(prompt("Escreva o coeficiente 'a':"));
const coefB = parseFloat(prompt("Escreva o coeficiente 'b':"));
const coefC = parseFloat(prompt("Escreva o coeficiente 'c':"));

if (coefA === 0) {
    alert("O coeficiente 'a' não pode ser zero.");
} else if (isNaN(coefA) || isNaN(coefB)|| isNaN(coefC)) {
    alert("Insira apenas números.");
} else {
    const descriminante = Math.pow(coefB,2) - (4*coefA*coefC);
    console.log(descriminante);
    if (descriminante > 0) {
        let x1 = (-coefB + Math.sqrt(descriminante)) / 2*coefA; 
        let x2 = (-coefB - Math.sqrt(descriminante)) / 2*coefA;
        alert(`A equação tem duas raízes reais X1 = ${x1} e X2 = ${x2}`);
    } else if (descriminante === 0) {
        let x = (-coefB + Math.sqrt(descriminante)) / 2*coefA; 
        alert(`A equação tem raíz real única X = ${x}`);
    } else {
        alert(`A equação não possui raízes reais.`);
    }
}