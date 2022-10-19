/**
 * Exercicios javascript
 * @author maciohslima
 * Calculo de desempenho
 */

let pontos = "30, 20, 40, 4, 51, 42, 38, 56, 0"
// let pontos2 = ""
//let arrayPontos = pontos.split(",")
//console.log(arrayPontos)

function percorrePontos (pontos) {
    let arrayPontos = pontos.split(", ")
    let recordePontos = 0
    let piorJogo = 1
    let maiorPontuacao = arrayPontos[0]
    let menorPontuacao = arrayPontos[0]

    for (let i = 0; i < arrayPontos.length; i++) {
        if(arrayPontos[i] > maiorPontuacao) {
            maiorPontuacao = arrayPontos[i]
            recordePontos++
        } else if(arrayPontos[i] < menorPontuacao) {
            menorPontuacao = arrayPontos[i]
            piorJogo = i + 1;
        }
        // return arrayPontos
    }
    return `
    O Jogador teve como melhor pontucao: ${maiorPontuacao} pontos
    O Jogador teve como pior pontuacao: ${menorPontuacao} pontos
    O Jogador bateu seu recorde de pontos ${recordePontos} vezes
    Pior resultado foi na partida: ${piorJogo}`
}

console.log(percorrePontos(pontos))
// console.log(percorrePontos(pontos2))

/* function avaliarDesempenho (pontos) {
    let pontuacao = pontos.split(",")
    let recorde = 0
    let piorjogo = 1
    let melhorDesempenho = pontuacao[0]
    let piorDesempenho = pontuacao[0]

    for (let i = 1; i < pontuacao.length; i++) {
        if(pontuacao[i] > melhorDesempenho) {
            melhorDesempenho = pontuacao[i]
            recorde++
        } else if(pontuacao[i] < piorDesempenho) {
            piorDesempenho = pontuacao[i]
            piorjogo = i + 1;
        }
    }
    return [recorde, piorjogo]
}

console.log(avaliarDesempenho(pontos)); */