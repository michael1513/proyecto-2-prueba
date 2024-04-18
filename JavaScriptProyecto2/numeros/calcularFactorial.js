/*
Fecha y Hora de publicación: 12:00 am
Autores. Ing. Gabriel Alejandro Betancur
Nombre del lenguaje utilizado: ECMASCRIPT 6.0
Versión del lenguaje utilizado: javascript 6.0
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación

*/ 

const readline = require('readline');

const interfaz = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularFactorial(numero) {
  let factorial = 1;
  for (let i = 2; i <= numero; i++) {
    factorial *= i;
  }
  return factorial;
}

interfaz.question("Ingrese un número para calcular su factorial: ", function(numero) {
  numero = parseInt(numero);

  if (isNaN(numero) || numero < 0) {
    console.log("Por favor, ingrese un número entero positivo.");
  } else {
    const factorial = calcularFactorial(numero);
    console.log(`El factorial de ${numero} es: ${factorial}`);
  }

  interfaz.close();
});
