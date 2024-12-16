let numerosordenados: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosRepetidos: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];

let numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];

let estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];

let estadosRepetidos: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];

let estadosCentroOeste: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];

//Listar as palavras com Rio
console.log("\nListar estados que começam com a palavra Rio: (filter())")
let estadoscomrio=estados.filter(estado=>estado.includes("Rio"))
console.dir(estadoscomrio)

//Multiplicar os números ordenados
console.log("\nListar todos números multiplicados por 3 (map())")
let numerosmultportres=numerosordenados.map(n=>n*3)
console.dir(numerosmultportres)

//Listar estados sem repetições
console.log("\nListar estados sem repetições (reduce())")
let estadossemrepeticoes=estadosRepetidos.reduce((acumulador:string[], estado)=>{
    if(acumulador.indexOf(estado)===-1)
        acumulador.push(estado)
    return acumulador;
    //Array vazio aqui embaixo [] é pra informar que tá sem parãmetro inicial, sem dados
}, [])
console.dir(estadossemrepeticoes)

//Combinação de arrays
console.log("\nCombinação de Arrays")
const arraycombinado:number[]=[...numerosordenados,...numerosDesordenados]
console.dir(arraycombinado)