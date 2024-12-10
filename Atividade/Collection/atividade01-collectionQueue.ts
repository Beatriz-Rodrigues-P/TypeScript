import readlinesync=require("readline-sync")
import {Queue} from "./Queue"

const fila=new Queue<string>() 
let opcoes
let adicionar
let retirar

console.log("\nBANCO BEATRIZ FINANCES")

do{
    console.log("\nOpções do sistema")
    console.log("1 - Adicionar cliente na fila")
    console.log("2 - Listar todos os clientes")
    console.log("3 - Retirar cliente da fila")
    console.log("0 - Sair do programa")

    opcoes=readlinesync.questionInt("\nSelecione a opcao desejada: ")

    switch(opcoes){
        case 1:
            adicionar=readlinesync.question("\nDigite o nome do cliente: ")
            fila.enqueue(adicionar)
            console.log("Cliente adicionado com sucesso!")
            fila.printQueue()
            break
        case 2:
            console.log("\nClientes na fila: ")
            if(fila.isEmpty()){
                console.log("Fila vazia!")
            }else{
                console.log("Lista de clientes atualizada: ")
                fila.printQueue()
            }
            break
        case 3:
            if(fila.isEmpty()){
                console.log("\nFila vazia, portanto, não é possível retirar clientes.")
            }else{
                retirar=fila.dequeue()
                console.log("\nFila atualizada: ")
                fila.printQueue()
            }
            break
        case 0:
            console.log("\nPrograma finalizado!")
            break
        default:
            console.log("\nTentativa inválida, insira um número válido!")
    }
}while(opcoes!==0)

process.exit(0)