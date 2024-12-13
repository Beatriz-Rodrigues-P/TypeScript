import { ciclista } from "./ciclista";
import { corredor } from "./corredor";
import { nadador } from "./nadador";
import { pessoa } from "./pessoa";

export class triatleta extends pessoa implements ciclista, nadador, corredor{

    constructor(nome:string){
        super(nome);
    }

    aquecer(): void {
        console.log("Aquecendo...");
    }
    nadar(): void {
        console.log("Nadando...");
    }

    correr(): void {
        console.log("Correndo..");
    }

    pedalar():void{
        console.log("Pedalando...")

    }

    cansou(): void {
        console.log("Cansou!");
    }
    
}