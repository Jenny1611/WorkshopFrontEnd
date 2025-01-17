const confronta = (a, b) => {
  risultato.innerText = "";
  if (a > b) {
    risultato.innerText = "A è maggiore";
  } else if (b > a) {
    risultato.innerText = "B È MAGGIORE";
  } else {
    risultato.innerText = "SONO UGUALI";
  }
};

const num1 = document.getElementById("numero1");

const num2 = document.getElementById("numero2");

const modulo = document.getElementById("form");
const btn = document.getElementById("invia");

const risultato = document.getElementById("risultato");

const controllaCampi = () => {
  let tuttoOk = true;

  if (num1.value === "") {
    tuttoOk = false;
    num1.classList.add("errore");
  } else {
    num1.classList.remove("errore");
  }

  if (num2.value === "") {
    tuttoOk = false;
    num2.classList.add("errore");
  } else {
    num2.classList.remove("errore");
  }

  if (tuttoOk) {
    risultato.classList.remove("errore");
  } else {
    risultato.classList.add("errore");
  }

  return tuttoOk;
};

const eseguiConfronto = (event) => {
  event.preventDefault();
  if (controllaCampi()) {
    confronta(parseFloat(num1.value), parseFloat(num2.value));
  } else {
    risultato.innerHTML = "ERRORE!";
  }
};

modulo.addEventListener("input", eseguiConfronto);
// modulo.addEventListener("submit", eseguiConfronto);
//stop bubblo
