function calcularInteres(principal, tasaInteres, tiempo) {
  // Calcula el monto de interés
  const interes = (principal * tasaInteres * tiempo) / 100;

  // Calcula el monto total a pagar
  const total = principal + interes;

  return {
    interes: interes,
    total: total,
  };
}

function obtenerNumeroInput(mensaje) {
  while (true) {
    const valor = parseFloat(prompt(mensaje));
    if (!isNaN(valor) && valor > 0) {
      return valor;
    } else {
      console.log("Por favor, ingrese un número válido y positivo.");
    }
  }
}

const montoPrincipal = obtenerNumeroInput("Ingrese el monto del préstamo:");
const tasaAnual = obtenerNumeroInput("Ingrese la tasa de interés anual (%):");
const plazoMeses = obtenerNumeroInput("Ingrese el plazo en meses:");

const resultado = calcularInteres(montoPrincipal, tasaAnual, plazoMeses);

console.log(`Monto de interés: $${resultado.interes.toFixed(2)}`);
console.log(`Monto total a pagar: $${resultado.total.toFixed(2)}`);