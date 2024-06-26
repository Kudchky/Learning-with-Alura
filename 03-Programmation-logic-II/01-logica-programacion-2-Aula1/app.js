const modificarElem = (id, texto) => {
  document.getElementById(id).innerHTML = texto;
};
const numeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

let numAleatorio = numeroAleatorio();

const intentar = () => {
  let $input = parseInt(document.querySelector("input").value);

  if (isNaN($input)) {
    alert("Ingresa un numero valido, no dejes el campo vacio..!");
    return;
  }

  if ($input === numAleatorio) {
    modificarElem(
      "resultado",
      `Acertaste, el numero aleatorio fue: ${numAleatorio}`
    );
  } else if ($input < numAleatorio) {
    modificarElem(
      "resultado",
      "El numero que ingresaste es menor que el numero aleatorio"
    );
  } else {
    modificarElem(
      "resultado",
      "El numero que ingresaste es mayor que el numero aleatorio"
    );
  }

  document.querySelector("input").value = "";
};

modificarElem("titulo_juego", "Juego del numero secreto!");

modificarElem("titulo_rango", "Indica un numero del 1 al 10");
