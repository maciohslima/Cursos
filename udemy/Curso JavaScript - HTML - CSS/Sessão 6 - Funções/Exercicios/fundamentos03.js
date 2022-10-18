/**
 * Curso HTML - CSS - JavaScript
 * @author maciohslima
 * Exercício 03: Criar Função que ao receber dois valores retorne a base elevada ao expoente
 */

function expoente (base, expoente) {
    //Criando a partir da notação .Math
    // let resultado = Math.pow(base, expoente);

    //Crando a partir do novo modelo ECMA Script 6
    resultado = base ** expoente;

    console.log(`O resultado da operação ${base} elevado a ${expoente} é igual a ${resultado}`);
}

expoente(2, 3);
expoente(2, 10);