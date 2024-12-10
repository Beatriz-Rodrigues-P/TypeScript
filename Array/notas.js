var notas = new Array(7.0, 5.0, 4.0, 10.0);
for (var _i = 0, notas_1 = notas; _i < notas_1.length; _i++) {
    var nota = notas_1[_i];
    console.log(nota.toFixed(1));
}
notas.push(4.0);
notas.unshift(2.5, 9.0);
console.log("\nExibir as novas notas cadastradas: ");
for (var _a = 0, notas_2 = notas; _a < notas_2.length; _a++) {
    var nota = notas_2[_a];
    console.log(nota.toFixed(1));
}
console.log("\nO índice da nota 2.5 é: " + notas.indexOf(2.5));
console.log("O índice da nota 2.5 está cadastrada no Array notas: " + notas.includes(2.5));
notas[notas.indexOf(7.0)] = 6.0;
console.log("\nExibir a nota alterada: ");
for (var _b = 0, notas_3 = notas; _b < notas_3.length; _b++) {
    var nota = notas_3[_b];
    console.log(nota.toFixed(1));
}
notas.splice(notas.indexOf(2.5), 1);
console.log("\nExibir as notas, sem a nota apagada: ");
for (var _c = 0, notas_4 = notas; _c < notas_4.length; _c++) {
    var nota = notas_4[_c];
    console.log(nota.toFixed(1));
}
