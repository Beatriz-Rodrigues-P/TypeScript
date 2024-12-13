export abstract class pessoa{

    private _nome: string;

	constructor(nome: string) {
		this._nome = nome;
	}

	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}

    abstract cansou():void;

    public visualizar(){
        console.log("____________________________")
        console.log("Dados do atleta             ")
        console.log("____________________________")
        console.log(`Nome do atleta: ${this.nome}`)
    }

}