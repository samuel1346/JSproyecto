alert("El juego se basa en elegir un número del 1 al 10. Si tu número es mayor que el de la computadora, ganas.");

let wins = 0;
let losses = 0;

const getUserNumber = () => {
  const userNumber = parseInt(prompt("Elige un número del 1 al 10"));
  if (userNumber < 1 || userNumber > 10 || isNaN(userNumber)) {
    alert("Por favor, ingresa un número válido del 1 al 10.");
    return getUserNumber();
  }
  return userNumber;
};

const playAgain = () => {
  const response = prompt("¿Quieres jugar de nuevo? (si/no)").toLowerCase();
  return response === "si";
};

while (true) {
  const userNumber = getUserNumber();
  const playerPc = Math.floor(Math.random() * 10) + 1;

  if (userNumber > playerPc) {
    alert("¡Ganaste!");
    wins++;
  } else if (userNumber < playerPc) {
    alert("Perdiste.");
    losses++;
  } else {
    alert("Es un empate.");
  }

  if (!playAgain()) {
    break;
  }
}

alert(`Juegos ganados: ${wins} Juegos perdidos: ${losses}`);
