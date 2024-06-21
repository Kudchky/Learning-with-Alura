let numeroSecreto = 6;
let numeroUsuario = null;
let contador = 1;
let maxIntentos = 3;

while (numeroSecreto != numeroUsuario) {
  numeroUsuario = parseInt(
    prompt("Me indicas un numero entre 1 y 10 por favor:")
  );

  if (numeroUsuario === numeroSecreto) {
    alert(
      `Acertaste, el numero es: ${numeroUsuario}, lo hiciste en ${contador} ${
        contador === 1 ? "vez" : "veces"
      }`
    );
  } else {
    if (numeroUsuario < numeroSecreto) {
      alert("No acertaste, el numero que ingresaste es menor");
    } else {
      alert("No acertaste, el numero que ingresaste es mayor");
    }
    contador++;
    palabraVeces = "veces";

    if (contador > 3) {
      alert(`Tus intentos terminaron, son solo ${maxIntentos} veces`);
      break;
    }
  }
}
