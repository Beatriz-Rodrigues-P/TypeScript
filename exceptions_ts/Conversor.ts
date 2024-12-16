try{
const resultado = converte(123);

console.log(resultado)
}catch(error:any){
    if(error instanceof TypeError){
        console.error("\nVocê digitou um número ao invés de uma string!")
    }else
        console.error("\nErro inesperado!", error.message)
}finally{
    console.log("\nPrograma finalizado")
}

export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}