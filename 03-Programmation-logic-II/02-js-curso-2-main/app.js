document.querySelector("h1").innerText = "Hora del Desafio";

function consola() {
  console.log("El botón fue clicado");
}

const promptFunc = () => {
  let city = prompt("Dime una ciudad de Brasil");
  alert(`Estuve en ${city} y me acorde de ti`);
}

const alerta = () => {
  alert("Yo amo JS" );
}

const suma = () => {
  let num1 = parseInt(prompt("Ingresa primer numero"));
  let num2 = parseInt(prompt("Ingrese segundo numero"));

  alert(`La suma es: ${num1 + num2}`);
}
