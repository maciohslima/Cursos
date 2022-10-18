/**
 * @author: maciohslima
 * Criado em: 17/10/2022
 * Curso Udemy: HTML - CSS - JavaScript
 * Exercício: Criar uma função que ao receber dois parâmetros execute as operações básicas
 */

const operacao = (num1, num2) => {

    console.log(`
    Iniciando o programa...
    Voce inseriu os valores ${num1} e ${num2}...
    O valor da soma desses numeros eh: ${num1 + num2}
    O valor da subtracao desses numeros eh: ${num1 - num2}
    O valor da multiplicacao desses numeros eh: ${num1 * num2}
    O valor da divisao desses numeros eh: ${num1 / num2}
    `)
}

operacao(2,3);