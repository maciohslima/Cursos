/**
 * Exercicios Fundamentos
 * @author: maciohsslima
 * Exercicio 02: Criar uma funcao que ao receber tres valores defina se um triangulo eh equilatero, isoceles ou escaleno...
 */

function classificaTriangulo (lado1, lado2, lado3) {

    console.log(`\nInicio do programa... \n \nVoce inseriu os seguintes lados de um trianguo: ${lado1}, ${lado2}, ${lado3}`);

    if(lado1 == lado2 && lado2 == lado3) {
        return `O triangulo formado por esses valores eh Equilatero \n\nFim do Programa...`;
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'O triangulo formado por esses valores eh Isoceles \n\nFim do Programa...';
    } else {
        return 'O triangulo formado por esses valores eh Escaleno \n\nFim do Programa...';
    }

    console.log(`Fim do programa...`)
}

console.log(classificaTriangulo(3, 3, 3));
console.log(classificaTriangulo(1, 3, 3));
console.log(classificaTriangulo(1, 2, 3));