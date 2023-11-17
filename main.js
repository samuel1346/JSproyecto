const pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
const arrTurnos = JSON.parse(localStorage.getItem("arrTurnos")) || [];

const formSaveDataPatient = document.getElementById("formSaveDataPatient");
formSaveDataPatient.addEventListener("submit", (e) => {
  e.preventDefault()
  const inputs = e.target.children;
  const listaPaciente = new Animalitos({
    nombre: inputs[1].value,
    edad: inputs[3].value,
    sexo: inputs[5].value,
    peso: inputs[7].value,
    raza: inputs[9].value,
    dni:  Math.random() + Math.random(),
  })
  pacientes.push(listaPaciente);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
  console.log(pacientes);
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'informacion del paciente guardada',
    showConfirmButton: false,
    timer: 1500
  })
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
          <div>Nombre : ${patient.nombre}</div>
          <div>Edad : ${patient.edad}</div>
          <div>Genero : ${patient.sexo}</div>
          <div>Peso : ${patient.peso}</div>
          <div>Especie : ${patient.raza}</div>
          <div>DNI : ${patient.dni}</div>
        </p>
      </div>`;
      searchPaciente.appendChild(sectionAside);
  });
}
searchAndDisplayPatient();

function turnos (){
  let agendarPaciente = document.getElementById("agendarPaciente");
  agendarPaciente.addEventListener("submit", (e) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Turno agendado con exito',
      showConfirmButton: false,
      timer: 1500
    })
    e.preventDefault();
    let inputsAgenda = e.target.children;
    const turnoDelPaciente = new turnoAgendado ({
      nombreAgendado : inputsAgenda[1].value,
      fechaAgendada : inputsAgenda[3].value,
    })
    arrTurnos.push(turnoDelPaciente);
    localStorage.setItem("arrTurnos", JSON.stringify(arrTurnos));
    console.log(arrTurnos)
  });
  class turnoAgendado {
    constructor(turnosValue){
      this.nombreAgendado = turnosValue.nombreAgendado;
      this.fechaAgendada = turnosValue.fechaAgendada;
    }
  };
};
turnos();

function searchAndDisplayTurno() {
  const buscarTurno = document.getElementById("buscarTurno");
  buscarTurno.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputsBuscadorTurno = e.target.children;
    const turnoBuscado = inputsBuscadorTurno[1].value;
    const turnoEncontrado = arrTurnos.filter(mascota => mascota.nombreAgendado === turnoBuscado);
    console.log(turnoEncontrado);
    displayTurno(turnoEncontrado);
  });
}
function displayTurno(turnos) {
  turnos.forEach((patient) => {
    const sectionAside = document.createElement("section");
    sectionAside.innerHTML = `
      <div class="divFormIndex" id="divFormIndex">
        <p>
          <div>Nombre : ${patient.nombreAgendado}</div>
          <div>fecha : ${patient.fechaAgendada}</div>
        </p>
      </div>`;
      buscarTurno.appendChild(sectionAside);
  });
}
searchAndDisplayTurno();

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
     link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
           window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth"
           });
        }
     });
  });
});

const stockMedicamentos = document.getElementById("stockMedicamentos");

const processItemsByType = async (type) => {
  let dataJson = await fetch("data.json");
  let dataInFront = await dataJson.json();
  console.log(dataInFront);

  let itemsOfType = dataInFront.filter(item => item.typeOf === type);

  let countMap = {};
  itemsOfType.forEach(item => {
    if (countMap[item.value]) {
      countMap[item.value]++;
    } else {
      countMap[item.value] = 1;
    }
  });

  itemsOfType.forEach(item => {
    item.inStock = countMap[item.value];
  });

  let uniqueItems = new Set();
  itemsOfType.forEach(item => {
    if (!uniqueItems.has(item.value)) {
      const itemOnDom = document.createElement("li");
      itemOnDom.innerHTML = `nombre :${item.value}; cantidad en stock:${item.inStock}`;
      if (type === "medicamento") {
        stockMedicamentos.append(itemOnDom);
      } else if (type === "alimentos") {
        stockAlimentos.append(itemOnDom);
      } else if (type === "pipetas") {
        stockPipetas.append(itemOnDom);
      }
      uniqueItems.add(item.value);
    }
  });
};

processItemsByType("medicamento");
processItemsByType("alimentos");
processItemsByType("pipetas");

  
