import {terrestre} from "./terrestre"
export class automovel extends terrestre{


    //Atributos
    private _cor: string;
    private _numportas: number;
    private _placa: string;
    private _marcha:number;

    constructor(capacidade:number, numerorodas: number, velocidade: number, cor:string, numportas:number, placa:string, marcha:number) {
		super(capacidade, numerorodas, velocidade)
        this._cor=cor;
        this._numportas=numportas;
		this._placa=placa;
        this._marcha=marcha
	}

	public get cor(): string {
		return this._cor;
	}

	public get numportas(): number {
		return this._numportas;
	}

	public get placa(): string {
		return this._placa;
	}

	public get marcha(): number {
		return this._marcha;
	}

	public set cor(value: string) {
		this._cor = value;
	}

	public set numportas(value: number) {
		this._numportas = value;
	}

	public set placa(value: string) {
		this._placa = value;
	}

	public set marcha(value: number) {
		this._marcha = value;
	}

    public visualizar(){
        super.visualizar()
        console.log(`Cor: ${this._cor}`)
        console.log(`Numero de portas: ${this._numportas}`)
        console.log(`Placa: ${this._placa}`)
        console.log(`Numero de marchas: ${this._marcha}`) 
    }
}


