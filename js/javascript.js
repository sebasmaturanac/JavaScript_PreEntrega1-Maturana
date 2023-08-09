function calcularInteres(principal, tasaInteres, tiempo) {
  const interes = (principal * tasaInteres * tiempo) / 100;
  const total = principal + interes;
  
  return {
    interes: interes,
    total: total
  };
}

const montoPrincipal = parseFloat(prompt("Ingrese el monto del préstamo:"));
const tasaAnual = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
const plazoMeses = parseInt(prompt("Ingrese el plazo en meses:"));

const resultado = calcularInteres(montoPrincipal, tasaAnual, plazoMeses);

alert(`Monto de interés: $${resultado.interes.toFixed(2)}\nMonto total a pagar: $${resultado.total.toFixed(2)}`);
