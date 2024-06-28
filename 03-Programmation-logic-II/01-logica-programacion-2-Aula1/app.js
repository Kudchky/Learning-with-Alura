let numAleatorio = 0;
let contador = 0;
let juegoTerminado = false;

const modificarElem = (id, texto) => {
  document.getElementById(id).innerHTML = texto;
};

const numeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const limpiarValor = () => {
  document.querySelector("input").value = "";
};

const condicionesIniciales = () => {
  modificarElem("titulo_juego", "Juego del numero secreto!");
  modificarElem("resultado", "Indica un numero del 1 al 10");
  juegoTerminado = false;
  contador = 1;
  numAleatorio = numeroAleatorio();
  document.getElementById("reiniciar").disabled = true;
};

const reiniciarJuego = () => {
  limpiarValor();
  condicionesIniciales();
};

const intentar = () => {
  if (juegoTerminado) return;

  let $input = parseInt(document.querySelector("input").value);

  if (isNaN($input)) {
    modificarElem(
      "resultado",
      `No dejes el campo vacio..!, es tu intento nro: ${contador}`
    );
  } else if ($input === numAleatorio) {
    modificarElem(
      "resultado",
      `Felicitaciones CHIMPA...!, el numero aleatorio fue: ${numAleatorio}, es tu intento nro: ${contador}`
    );
    juegoTerminado = true;
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if ($input < numAleatorio) {
    modificarElem(
      "resultado",
      `Ingresa un numero mayor,  es tu intento nro: ${contador}`
    );
  } else {
    modificarElem(
      "resultado",
      `Ingresa un numero menor,  es tu intento nro: ${contador}`
    );
  }
  limpiarValor();
  if (contador === 3 && $input !== numAleatorio) {
    modificarElem("resultado", `Perdiste, has superado los 3 intentos`);
    juegoTerminado = true;
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if(contador === 3 && $input === numAleatorio) {
    modificarElem("resultado", "Ganaste, en el ultimo intento");
    juegoTerminado = true;
    document.getElementById("reiniciar").removeAttribute("disabled");
  }
  contador++;
};

condicionesIniciales();
