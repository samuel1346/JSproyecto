const pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

const formSaveDataPatient = document.getElementById("formSaveDataPatient");
formSaveDataPatient.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const inputs = e.target.children;
  const listaPaciente = new Animalitos({
    nombre: inputs[1].value,
    edad: inputs[3].value,
    sexo: inputs[5].value,
    peso: inputs[7].value,
    raza: inputs[9].value,
    dni:  Math.random() * 10,
  })
  pacientes.push(listaPaciente);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
  console.log(pacientes);
});

class Paciente {
  constructor(descriptores) {
    this.nombre = descriptores.nombre;
    this.edad = descriptores.edad;
    this.sexo = descriptores.sexo;
    this.peso = descriptores.peso;
    this.raza = descriptores.raza;
    this.dni = descriptores.dni;
  }
  
}
class Animalitos extends Paciente {
  constructor(descriptores) {
    super(descriptores);
  }
}

function searchAndDisplayPatient() {
  const searchPaciente = document.getElementById("searchPaciente");
  searchPaciente.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputsBuscador = e.target.children;
    const nombreBuscado = inputsBuscador[1].value;
    let pacienteEncontrado = pacientes.filter(mascotas => mascotas.nombre === nombreBuscado);
    
    displayPatients(pacienteEncontrado);
  });
}
function displayPatients(patients) {
  patients.forEach((patient) => {
    let sectionAside = document.createElement("section");
    sectionAside.innerHTML = `
      <div class="divFormIndex" id="divFormIndex">
        <p>
          Nombre = ${patient.nombre}
          Edad = ${patient.edad}
          Genero = ${patient.sexo}
          Peso = ${patient.peso}
          Especie = ${patient.raza}
          DNI = ${patient.dni}
        </p>
      </div>`;
    asideIndex.appendChild(sectionAside);
  });
}
searchAndDisplayPatient();

