let numeroLimite = parseInt(prompt("Ingrese numero limite para empezar a jugar"));
let numeroSecreto = Math.floor(Math.random() * numeroLimite) + 1;
let numeroUsuario = 0;
let contador = 1;
let maxIntentos = 5;

while (numeroSecreto != numeroUsuario) {
  numeroUsuario = parseInt(
    prompt(`Me indicas un numero entre 1 y ${numeroLimite} por favor:`)
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

    if (contador > maxIntentos) {
      alert(`Tus intentos terminaron, son solo ${maxIntentos} veces`);
      break;
    }
  }
}
