function imc(a, b) {
  return a / b ** 2;
}

function calcular() {
  let a, b, x;
  a = document.getElementById("peso").value;
  b = document.getElementById("altura").value;
  x = imc(a, b);
  document.getElementById("resultado").innerHTML = x.toFixed(2);
}
