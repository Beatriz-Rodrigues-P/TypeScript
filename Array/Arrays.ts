import readlinesync=require("readline-sync")

//Criamos a coleção Array
const numeros:Array<number>=new Array<number>()

//Adicionamos os valores 
numeros.push(7)
numeros.push(2)
numeros.push(5)
numeros.push(10)
numeros.push(7, 3)

//Listamos os dados que foram adicionados
for(let numero of numeros){
    console.log(numero)
}

//Adicionamos um numero utilizando a entrada de dados via teclado
numeros.push(readlinesync.questionFloat("Digite um numero: "))

//Adicionamos um ou mais elementos no inicio da fila
numeros.unshift(2,4,5,8,9)

console.table(numeros)

//Verificamos se um número existe na coleção 
console.log("\nExiste numero 5 no Array? ", numeros.includes(5))
//Verificamos qual o índice de um elemento
console.log("Qual indice do numero 3 no Array? ", numeros.indexOf(3))

//Removemos um número da coleção de Values
numeros.splice(numeros.indexOf(10), 1)

console.table(numeros)