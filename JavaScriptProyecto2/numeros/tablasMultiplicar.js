/*
Fecha y Hora de publicación: 12:00 am
Autores. Ing. Gabriel Alejandro Betancur
Nombre del lenguaje utilizado: ECMASCRIPT 6.0
Versión del lenguaje utilizado: javascript 6.0
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación

*/ 

function imprimirTablasMultiplicar() {
    for (let i = 1; i <= 10; i++) {
      console.log(`Tabla de multiplicar del ${i}:`);
      for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
      }
      console.log(""); // Imprimir una línea en blanco entre cada tabla
    }
  }
  
  imprimirTablasMultiplicar();
  