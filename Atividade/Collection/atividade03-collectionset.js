"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlinesync = require("readline-sync");
//Utilizar o set para não haver números repetidos
var numeros = new Set();
var numero;
var contador = 0;
console.log("\nInsira 10 números inteiros não repetidos.");
for (contador = 0; contador < 10; contador++) {
    numero = readlinesync.questionInt("\nInsira um número: ");
    while (numeros.has(numero)) {
        console.log("\nNúmero repetido. Insira um número válido!");
        numero = readlinesync.questionInt("Insira outro número: ");
    }
    numeros.add(numero);
}
console.log("\nNúmeros: ");
for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
    var num = numeros_1[_i];
    console.log(num);
}
