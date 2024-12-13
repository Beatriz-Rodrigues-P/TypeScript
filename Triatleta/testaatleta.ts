import { triatleta } from "./triatleta";

function main(){
    const atleta=new triatleta ("Simone");

    atleta.aquecer();
    atleta.nadar();
    atleta.pedalar();
    atleta.correr();
    atleta.cansou();

}

main()