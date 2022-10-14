// Factory simples
function criarPessoa() {
    return {
        nome: 'Macio',
        sobrenome: 'Lima'
    }
}


// Factory Composto
function criarProduto(nomeProduto, valorProduto) {
    return {
        nomeProduto,
        valorProduto,
        descontoProduto: 0.1
    }
}

console.log(criarPessoa());
console.log(criarProduto('Coco', 10));