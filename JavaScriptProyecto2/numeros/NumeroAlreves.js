const prompt = require('prompt-sync')();
let numero = parseFloat(prompt('Ingrese su número: '));

function numeroAlreves(numero) {
  let reverso = 0;
  while (numero > 0) {
    reverso = 10 * reverso + numero % 10;
    numero = Math.floor(numero / 10);
  }
  return reverso;
}

let numeroInverso = numeroAlreves(numero);
console.log(`El número ${numero} en inverso es ${numeroInverso}`); 