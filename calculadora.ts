import readlinesync=require("readline-sync")

let numero1: number
let numero2: number

numero1=readlinesync.questionFloat("\nDigite o primeiro numero: ")
numero2=readlinesync.questionFloat("Digite o primeiro numero: ")

console.log("\nA soma dos dois numeros é igual a:", numero1+numero2)
console.log("A subtração dos dois numeros é igual a:", numero1-numero2)
console.log("A multiplicação dos dois numeros é igual a:", numero1*numero2)
console.log("A divisão dos dois numeros é igual a:", numero1/numero2)

