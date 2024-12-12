//Essa é a super classe Transporte, todo o parâmetro que tem nela, tem que passar para as subclasses

export class transporte{

    //parâmetro
    private _capacidade:number;

    //Constructor define os valores iniciais dos atributos do objeto
    //Inicializa um objeto quando é criado.
	constructor(capacidade: number) {
		this._capacidade = capacidade;
	}

	public get capacidade(): number {
		return this._capacidade;
	}

	public set capacidade(value: number) {
		this._capacidade = value;
	}

    public visualizar(){
        console.log("_____________________________________________________")
        console.log("DADOS DO TRANSPORTE                                  ")
        console.log("_____________________________________________________")
        console.log(`Capacidade do meio de transporte: ${this._capacidade}`)
        console.log("_____________________________________________________")
        
    }
}