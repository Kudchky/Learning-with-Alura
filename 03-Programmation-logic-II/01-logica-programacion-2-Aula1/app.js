let numAleatorio = 0;
let contador = 0;

const modificarElem = (id, texto) => {
  document.getElementById(id).innerHTML = texto;
  return;
};

const numeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const condicionesIniciales = () => {
  modificarElem("titulo_juego", "Juego del numero secreto!");
  modificarElem("resultado", "Indica un numero del 1 al 10");
  contador = 1;
  numAleatorio = numeroAleatorio();
};

condicionesIniciales();

const intentar = () => {
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
  document.querySelector("input").value = "";
  if (contador > 3) {
    modificarElem("resultado", `Has superado los 3 intentos`);
    return;
  }
  contador++;
};
