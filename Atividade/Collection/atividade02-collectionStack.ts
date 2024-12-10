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
            console.log("\nLivro adicionado com sucesso!")
            pilha.printStack()
            break
        case 2:
            console.log("\nLivros da pilha ")
            if(pilha.isEmpty()){
                console.log("\nPilha da biblioteca está vazia!")
            }else{
                console.log("\nLista de livros atualizada: ")
                pilha.printStack()
            }
            break
        case 3:
            if(pilha.isEmpty()){
                console.log("\nPilha da biblioteca vazia, não é possível excluir livro.")
            }else{
                excluir=pilha.pop()
                console.log("\nPilha atualizada. O livro foi excluído da biblioteca! ")
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
