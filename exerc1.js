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

alert("alcula raízes de funções quadráticas no formato ax² + bx + c = 0");

const coefA = parseFloat(prompt("Escreva o coeficiente 'a':"));
const coefB = parseFloat(prompt("Escreva o coeficiente 'b':"));
const coefC = parseFloat(prompt("Escreva o coeficiente 'c':"));

if (coefA === 0) {
    alert("O coeficiente 'a' não pode ser zero.");
} else if (isNaN(coefA) || isNaN(coefB)|| isNaN(coefC)) {
    alert("Insira apenas números.");
} else {
    const descriminante = coefB^2 - (4*coefA*coefC);
}