let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("\nNúmeros através de for:")
for(let numero of numeros){
    console.log(numero)
}

//Arrow functions
console.log("\nNúmeros através de Arrow:")
numeros.forEach(numero=>console.log(numero))

//Elevado ao quadrado
console.log("\nNúmeros elevados ao quadrado:")
numeros.forEach(numero=>console.log(numero*numero))

//Pares
console.log("\nNúmeros pares:")
numeros.forEach(numero=>{
    if(numero%2===0)
        console.log(numero)
})