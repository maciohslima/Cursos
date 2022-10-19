/**
 * Exercicios JS
 * @author maciohslima
 * Elaborar duas funcoes que calculem o juros simples e composto de um determinado valor passado como paranmetro
 */

function jurosSimples(capitalInicial, txJuros, tempoAplicacao) {
    return capitalInicial + (capitalInicial * txJuros * tempoAplicacao)
}

function jurosComposto(capitalInicial, txJuros, tempoAplicacao) {
    return capitalInicial * (1 + txJuros) ** tempoAplicacao
}

console.log(`Inicio do programa... \n`)

let calculaJurosSimples = jurosSimples(100.2334, 0.10, 2)
console.log(`O valor da aplicacao com juros simples eh: R$ ${calculaJurosSimples.toFixed(2).replace(".", ",")}\n`)

let calculaJurosComposto = jurosComposto(100.2334, 0.10, 2).toFixed(2).replace(".", ",")
console.log(`O valor da aplicacao com juros composto eh: R$ ${calculaJurosComposto} \n`)

console.log(`Fim do programa...`)