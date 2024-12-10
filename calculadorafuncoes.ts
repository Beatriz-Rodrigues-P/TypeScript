import readlinesync=require("readline-sync")
import {colors} from "./util/cores"

let num1:number
let num2:number
let opcao:number

do{
    menu()

    opcao=(readlinesync.questionInt("Digite a operação desejada"))

    if(opcao===0){
        about()
        process.exit(0)
    }

    switch(opcao){
        case 1:
            // Desestruturação do objeto
            [num1,num2]=obterNums()
            console.log(`${num1}+${num2}=${somar(num1, num2)}`)
        break
        case 2:
            // Desestruturação do objeto
            [num1,num2]=obterNums()
            console.log(`${num1}-${num2}=${subtrair(num1, num2)}`)
        break
        case 3:
            // Desestruturação do objeto
            [num1,num2]=obterNums()
            console.log(`${num1}*${num2}=${multiplicar(num1, num2)}`)
        break
        case 4:
            // Desestruturação do objeto
            [num1,num2]=obterNums()
            let resultado=dividir(num1, num2)

            if(resultado!==null){
            console.log(`${num1}/${num2}=${resultado}`)
            }else{
                console.log("Não existe divisão por zero!")
            }
        break
    default:
            console.log("Opção inválida!")
        break
    }

}while(true)


function menu():void{
    console.log(colors.bg.yellow, colors.fg.black,"*******************************************")
    console.log("                Calculadora                  ")
    console.log("*********************************************")
    console.log("     1 - Somar                               ")
    console.log("     2 - Subtrair                            ")
    console.log("     3 - Multiplicar                         ")
    console.log("     4 - Dividir                             ")
    console.log("*********************************************")
    console.log("Digite a opção desejada:                     ", colors.reset)

    num1=readlinesync.questionFloat("Digite o primeiro valor: ")
    num2=readlinesync.questionFloat("Digite o segundo valor: ")
}

function obterNums():[number, number]{
    const num1=readlinesync.questionFloat("Digite o primeiro numero: ")
    const num2=readlinesync.questionFloat("Digite o segundo numero: ")
    return[num1,num2]
}

function somar(num1:number, num2:number):number{
    return num1+num2
}
function subtrair(num1:number, num2:number):number{
    return num1-num2
}
function multiplicar(num1:number, num2:number):number{
    return num1*num2
}
function dividir(num1:number, num2:number):number|null{
    let divisao=num1/num2
    //Se a pessoa passou um numero 0, null, caso contrário, divide normal
    return(divisao!=Infinity ? divisao:null)
}

function about(){
    console.log("Criado por Beatriz!")
}