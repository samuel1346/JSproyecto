/*alert("El juego se basa en elegir un número del 1 al 10. Si tu número es mayor que el de la computadora, ganas.");

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
*/
const historialPacientes = [];

class Paciente {
  constructor(descriptores) {
    this.raza = descriptores.raza;
    this.nombre = descriptores.nombre;
    this.edad = descriptores.edad;
    this.color = descriptores.color;
    this.peso = descriptores.peso;
    this.sexo = descriptores.sexo;
  }

  cartillaMedica() {
    alert(`El paciente atendido hoy es un ${this.raza}
      se llama ${this.nombre}, 
      tiene ${this.edad}, 
      sus colores son ${this.color}, 
      pesa ${this.peso}, 
      y su sexo es ${this.sexo}`
    );
  }
}

class Animalitos extends Paciente {
  constructor(descriptores) {
    super(descriptores);
  }
}

let shouldAddPatient = true;

while (shouldAddPatient) {
  const listaPacientes = new Animalitos({
    raza: prompt("raza de tu mascota"),
    nombre: prompt("nombre de la mascota"),
    edad: prompt("cuántos años/meses tiene"),
    color: prompt("de qué color es"),
    peso: prompt("cuánto pesa"),
    sexo: prompt("es macho o hembra"),
  });

  historialPacientes.push(listaPacientes);

  const continueAdding = confirm("queres añadir un nuevo paciente?");
  if (!continueAdding) {
    shouldAddPatient = false;
  }
}

const searchPaciente = confirm("queres buscar algun paciente?");
if (searchPaciente) {
    nombreDelPaciente = prompt("escriba el nombre del paciente");
};
const pacienteEncontrado = historialPacientes.filter(paciente => paciente.nombre === nombreDelPaciente);
console.log(pacienteEncontrado);

historialPacientes.sort((a, b) => a.raza.localeCompare(b.raza));
console.log(historialPacientes);


