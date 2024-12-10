import readlinesync=require("readline-sync")
import {Stack} from "./Stack"

const pilha=new Stack<string>()
let opcoes
let livros
let excluir

do{
    console.log("\nOpções da biblioteca")
    console.log("1 - Adicionar um livro na pilha")
    console.log("2 - Listar todos os livros")
    console.log("3 - Retirar um livro da pilha")
    console.log("0 - Sair da biblioteca")

    opcoes=readlinesync.questionInt("\nSelecione a opcao desejada: ")

    switch(opcoes){
        case 1:
            pilha.push(readlinesync.question("\nDigite o nome do livro: "))
            
            console.log("Livro adicionado com sucesso!")
            pilha.printStack()
            break
        case 2:
            console.log("\nLivros na pilha: ")
            if(pilha.isEmpty()){
                console.log("Pilha da biblioteca está vazia!")
            }else{
                console.log("Lista de livros atualizada: ")
                pilha.printStack()
            }
            break
        case 3:
            if(pilha.isEmpty()){
                console.log("\nPilha da biblioteca vazia, não é possível excluir livros.")
            }else{
                excluir=pilha.pop()
                console.log("\nPilha atualizada: ")
                pilha.printStack()
            }
            break
        case 0:
            console.log("\nBiblioteca finalizada!")
            break
        default:
            console.log("\nTentativa inválida, insira um número válido!")
    }
}while(opcoes!==0)