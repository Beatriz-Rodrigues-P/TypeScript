import { transporte } from "./transporte";

export class terrestre extends transporte{


    //parâmetros
    private _numerorodas:number;
    private _velocidade:number;

	constructor(capacidade:number, numerorodas: number, velocidade: number) {
		super(capacidade)
        this._numerorodas = numerorodas;
		this._velocidade = velocidade;
	}

	public get numerorodas(): number {
		return this._numerorodas;
	}

	public get velocidade(): number {
		return this._velocidade;
	}

	public set numerorodas(value: number) {
		this._numerorodas = value;
	}

	public set velocidade(value: number) {
		this._velocidade = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`Numero de rodas: ${this._numerorodas}`)
        console.log(`Velocidade: ${this._velocidade}`)
    }
}
