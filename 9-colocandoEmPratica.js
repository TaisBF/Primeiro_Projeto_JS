// Definindo as notas do aluno em um array
const notas = [8, 7, 6, 9, 8];

// Calculando a média das notas
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
const media = soma / notas.length; 

// length = Apresenta o numero  de elementos do array

// Imprimindo a média
console.log("A média do aluno é:", media);

// Verificando se o aluno foi aprovado ou reprovado
if (media >= 7) {
    console.log("O aluno foi aprovado!");
} else {
    console.log("O aluno foi reprovado.");
}

