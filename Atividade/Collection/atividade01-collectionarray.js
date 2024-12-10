"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlinesync = require("readline-sync");
//Criação de coleção Array
var cores = new Array();
//Começar a lista as cores adicionadas
for (var _i = 0, cores_1 = cores; _i < cores_1.length; _i++) {
    var cor = cores_1[_i];
    console.log(cor);
}
//Adicionaremos uma cor a partir da entrada do usuário
cores.push(readlinesync.question("\nInsira a primeira cor: "));
cores.push(readlinesync.question("Insira a segunda cor: "));
cores.push(readlinesync.question("Insira a terceira cor: "));
cores.push(readlinesync.question("Insira a quarta cor: "));
cores.push(readlinesync.question("Insira a quinta cor: "));
//Criação da tabela de cores
console.log("\nLista de todas as cores inseridas:");
console.table(cores);
//Sort para organizar a lista em ordem alfabética
console.log("\nLista das cores em ordem alfabética:");
cores.sort();
console.table(cores);
