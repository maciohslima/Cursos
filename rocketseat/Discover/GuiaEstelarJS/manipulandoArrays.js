//Manipulando Arrays

let techs = ["html", "css", "js"];

//adicionar um item no fim
techs.push("nodejs");
//adicionar um item no comeco
techs.unshift("sql");
//remover um item do fim
techs.pop();
//remover um item do comeco
techs.shift();
//pegar somente alguns itens do array
//console.log(techs.slice(1, 3))
//remover 1 ou mais itens de qualquer posicao do array
techs.splice(1,1);
//encontrar a posicao de algum elemento do array

console.log(techs)