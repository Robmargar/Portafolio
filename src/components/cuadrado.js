const base = 9119;
let resultado = "";

function cuadrado(numero) {
  numero = parseInt(numero);
  var nuevonumero = numero * numero;
  return nuevonumero;
}

const baseString = base.toString();

for (let i = 0; i < baseString.length; i++) {
  var res = cuadrado(baseString[i]);
  resultado = resultado + res;
}

parseInt(resultado);
console.log(resultado);

