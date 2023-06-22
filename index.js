/*
  // Solicitud del nombre y apellido. Los quise hacer distintos cuadro de diálogo. Solo se aceptan letras 
  let nombre = prompt("Ingrese su nombre");
  if (nombre.trim() === "") {
    nombre = prompt (" Por favor, volvé a ingresar tu nombre correctamente, gracias")
  } 

    let apellido = prompt("Ingrese su apellido");
    if (apellido.trim() === "") {
        apellido = prompt("Ingresá tu apellido correctamente, gracias.")
    }
    

  // Saluda al usuario mediante cuadro de diálogo
  alert("¡Hola, " + nombre + " " + apellido + "!");



  // Asignar el nombre del médico seleccionado  y olicitar al usuario que elija un médico
let nombreMedico;
let opcionValida = false;

while (!opcionValida) {
  const opcionMedico = parseInt(prompt("Por favor, elija un médico:\n1. House\n2. Merlin\n3. Rasputin\n4. BabaYaga"));

  switch (opcionMedico) {
    case 1:
      nombreMedico = "House";
      opcionValida = true;
      break;
    case 2:
      nombreMedico = "Merlin";
      opcionValida = true;
      break;
    case 3:
      nombreMedico = "Rasputin";
      opcionValida = true;
      break;
    case 4:
      nombreMedico = "BabaYaga";
      opcionValida = true;
      break;
    default:
        opcionValida = false;
      alert ("Opción inválida. Por favor, ingresá un número que corresponda a las opciones de médicos disponibles.");
      break;
  }
}


  alert ("Seleccionaste al medico " + nombreMedico);

  

  // Funcion para calcular la diferencia entre la fecha actual y la fecha del turno
function calcularTiempoRestante(fechaHora) {
    const fechaActual = new Date(); // Obtiene la fecha y hora actual
    const fechaTurno = new Date(fechaHora); // Convierte la fecha y hora del turno a un objeto Date
  
   //ahora calculo la diferencia
    const diferencia = fechaTurno - fechaActual;
  
    
    const mesesRestantes = Math.floor(diferencia / (1000 * 3600 * 24 * 30));
    const diasRestantes = Math.floor(diferencia / (1000 * 3600 * 24));
    
    return {
      meses: mesesRestantes,
      dias: diasRestantes,
      
    };
  }
  
  
  // Pedir la fecha del turno (DD-MM)
  const fechaTurno = prompt("Ingresá la fecha del turno respetando el siguiente formato: (DD-MM)");
  
  
  const añoActual = new Date().getFullYear();
  
  // Separar el día y el mes de la fecha ingresada
  const [dia, mes] = fechaTurno.split("-");
  
  // Crear la fecha completa con el año actual
  const fechaHoraTurno = new Date(añoActual, mes - 1, dia); 
  
  // Solicitar al usuario la hora del turno
  const horaTurno = prompt("Ahora ingresá la hora del turno, también respetando el siguiente formato: (HH:mm)");
  
  // Calcular el tiempo restante hasta el turno
  const tiempoRestante = calcularTiempoRestante(fechaHoraTurno);
  
  // Mostrar la fecha y hora del turno programado
  alert ("Sacaste turno con el médico " + nombreMedico + " y está programado para el día " + fechaHoraTurno.toDateString() + " a las " + horaTurno + ".");
  
  // Mostrar el tiempo restante hasta el turno
  alert ("Recordá que falta " + tiempoRestante.meses + " meses, " + tiempoRestante.dias + " días,  para tu turno. Te recomendamos estar en la sala de espera al menos 20 minutos antes. ¡Saludos! ");
  css*/
  

  class Paciente{
    constructor(nombre,especialidad, obraSocial, costoBruto){
      this.nombre=nombre;
      this.especialidad = especialidad;
      this.obraSocial = obraSocial;
      this.costoBruto = costoBruto;
    }
  

  descontarObraSocial() {
    if (this.obraSocial=="true"){
    return this.costoBruto /6;
  }else if (this.obraSocial == "false") {
    return this.costoBruto
  }
}
  }


var arrayPaciente = [];

do{
  var comprobacion = prompt("ingrese los datos del nuevo paciente o <Exit> para salir");
  if (comprobacion.tolowercase() == "Exit") {
    break
  }else{
    var nombreP = prompt("Ingrese el nombre y apellido del paciente nuevo");
    var especialidadP = prompt("Ingrese especialidad por la que consulta");
    var obraSocialP = prompt("si tiene obra social coloque true");
    var costoBrutoP = prompt ("costo consulta en bruto");
    arrayPaciente.push( new Paciente(nombreP, especialidadP, obraSocialP, prepagaP,costoBrutoP));
  } 
  while (comprobacion != "EXIT"|| comprobacion != "Exit" || comprobacion != "exit")
  console.log(arrayPaciente);
}
  

document.write("<h3> El nuevo paciente se llama " + this.nombre + " y el costo de su consulta para la especialidad " + this.especialidad + "es de"+ descontarObraSocial() );
for (var paciente of arrayPaciente) {
  document.write ("<h3> El nombre del paciente es: " + paciente.nombre);
  document.write ("<h3> que se atenderá en la especialidad: " + paciente.especialidad);
  document.write ("<h3> el costo de su consulta es de: " + descontarObraSocial())
}







