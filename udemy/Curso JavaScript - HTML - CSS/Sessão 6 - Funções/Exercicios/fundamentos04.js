/**
 * Curso: HTML - CSS - JavaScript
 * @author maciohslima
 * Exercicio: Criar uma função, que ao receber dois valores irá retornar o resultado da divisão e o resto;
 */

function operacaoDivRes (dividendo, divisor) {
    //Realizando a opreação de Divisão dos valores
    let divisao = dividendo / divisor;
    let resto = dividendo % divisor;

    // validação de dados;
    if(divisor === 0) {
        return 'Número do dividendo é inválido, pois nenhum número pode ser dividido por zero';
    } else {
        return 'O valor da divisão é: ' + divisao + '\nO valor do resto da divisão é: ' + resto;
    }
    
}

//execução das possibilidades
console.log(operacaoDivRes(4,2));
console.log(operacaoDivRes(0,2));
console.log(operacaoDivRes(2,0));