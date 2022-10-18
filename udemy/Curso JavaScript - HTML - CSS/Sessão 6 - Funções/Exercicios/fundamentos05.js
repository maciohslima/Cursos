/**
 * Curso HTML - CSS - JavaScript
 * @author maciohslima
 * Exercício: Formatar valores para duas casas decimais + trocar ponto por vírgula ex.: R$0,30
 */

function formatarValoresDecimais (valorDecimal) {
    //Convertendo valor para duas casas decimais
    converteValorDecimal = valorDecimal.toFixed(2).toString().replace(".", ",");
    
    //Escrevendo valor em R$
    console.log(`O valor em reais é: R$ ${converteValorDecimal}`)
}

//executando testes
formatarValoresDecimais(0.1 + 0.2);
formatarValoresDecimais(2.307 + 5.53);