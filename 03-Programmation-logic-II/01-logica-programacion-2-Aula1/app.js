let numAleatorio = 0;
let contador = 0;
let juegoTerminado = false;
let intentos = 10;
let listaIntentos = [];

const modificarElem = (id, texto) => {
  document.getElementById(id).innerHTML = texto;
};

const numeroAleatorio = () => {
  return Math.floor(Math.random() * intentos) + 1;
};

const limpiarValor = () => {
  document.querySelector("input").value = "";
};

const agregarNumeroArray = () => {
  if(listaIntentos.length === intentos) return;

  if(listaIntentos.includes(numAleatorio)) {
    numAleatorio = numeroAleatorio();
    console.log(numAleatorio)
    return agregarNumeroArray();

  } else {
    console.log(numAleatorio);
    listaIntentos.push(numAleatorio);
    console.log(listaIntentos);
    return numAleatorio;
  }
}

const condicionesIniciales = () => {
  modificarElem("titulo_juego", "Juego del numero secreto!");
  modificarElem("resultado", `Indica un numero del 1 al ${intentos}`);
  juegoTerminado = false;
  contador = 1;
  numAleatorio = numeroAleatorio();
  document.getElementById("reiniciar").disabled = true;
  agregarNumeroArray();
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

  if (contador === 3) {
    if ($input !== numAleatorio) {
      modificarElem("resultado", "Perdiste, has superado los 3 intentos");
    } else {
      modificarElem("resultado", "¡Ganaste en el ultimo intento!");
    }
    juegoTerminado = true;
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    contador++;
  }
  limpiarValor();
};

condicionesIniciales();
