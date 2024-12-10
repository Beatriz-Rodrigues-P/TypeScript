//Meu vscode está com algum problema e a única solução que encontrei foi mudar a biblioteca para esta configuração
import * as readlinesync from "readline-sync"

//Utilizar o set para não haver números repetidos
const numeros: Set<number>= new Set<number>()
let numero: number
let contador=0

//Frase de introdução para a ação
console.log("\nInsira 10 números inteiros não repetidos.")

//For com a inicialização, condição e o incremento para rodar o loop
for(contador=0; contador<10; contador++){
    numero=readlinesync.questionInt("\nInsira um numero: ")
    //While iremos testar os números para saber se terá algum repetido, caso contrário continuará o processo de depuração de números
    while(numeros.has(numero)){
        numero=readlinesync.questionInt("\nNumero repetido. Insira um numero valido: ")
    }
    numeros.add(numero)
}

console.log("\nNúmeros: ")
    for(let num of numeros){
    console.log(num)
}

