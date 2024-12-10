import readlinesync=require("readline-sync")
import {Queue} from "./Queue"

const fila= new Queue<string>()

fila.enqueue("Beatriz")
fila.enqueue("Gustavo")
fila.enqueue("Alana")

fila.enqueue(readlinesync.question("Digite o seu nome: "))

fila.printQueue()

console.log(fila.contains("Alana"))
console.log(fila.count())

//Chama a primeira pessoa da fila - SEMPRE a primeira pessoa
console.log("\nChamar:", fila.dequeue())
fila.printQueue()

//Mostra o próximo da fila a ser chamado
console.log("O próximo da fila é: ", fila.peek())