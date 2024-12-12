//Importação de todos os dados de todas as classes, a começar pela superclasse
import { transporte } from "./transporte";
import { terrestre } from "./terrestre";
import { automovel } from "./automovel";



function main(){

    const t1=new transporte(5);
    t1.visualizar();
    const tr1=new terrestre(5, 4, 100);
    tr1.visualizar();
    const auto1=new automovel(5, 4, 250, "azul", 5, "BEA-1025", 5);
    auto1.visualizar();
    
}

main();