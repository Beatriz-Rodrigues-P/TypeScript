import readlinesync=require("readline-sync")

//Criação de coleção Array
const cores:Array<string>=new Array<string>()

//Começar a lista as cores adicionadas
for(let cor of cores){
    console.log(cor)
}

//Adicionaremos uma cor a partir da entrada do usuário
cores.push(readlinesync.question("\nInsira a primeira cor: "))
cores.push(readlinesync.question("Insira a segunda cor: "))
cores.push(readlinesync.question("Insira a terceira cor: "))
cores.push(readlinesync.question("Insira a quarta cor: "))
cores.push(readlinesync.question("Insira a quinta cor: "))

//Criação da tabela de cores
console.log("\nLista de todas as cores inseridas:")
console.table(cores)

//Sort para organizar a lista em ordem alfabética
console.log("\nLista das cores em ordem alfabética:")
cores.sort()
console.table(cores)