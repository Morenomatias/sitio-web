var respuesta = "China";
var contador = 0;
var adv,adv2 = false;

function Verificar() {
  var rta = document.getElementById("resp").value;

  rta = rta.toLowerCase();

  console.log(rta);

  if (rta == respuesta) {

    document.getElementById("result").innerHTML =
      "<span class='alert alert-success'>Correcto</span>";

    var adv = true;
  } else {
    document.getElementById("result").innerHTML =
      "<span class='alert alert-danger'>Error</span>";

    contador++;

    if (contador < 4) {
      if (contador == 2) {
        document.getElementById("pista1").innerText = "Es un pais de Asia";
      }
      if (contador == 3) {
        document.getElementById("pista2").innerText =
          "2- Actualmente tiene la mayor población";
      }
    } else {
      alert("Te quedaste sin intentos!");
      document.getElementById("respTrue").innerText = " la respuesta correcta era China";
      document.getElementById("boton").disabled = true;
    }

    document.getElementById("intentos").innerText = 4 - contador;
  }
}


if (adv && adv2) {
  document.getElementById("camp").innerText = "Sos el ganador definitivo!";
}
