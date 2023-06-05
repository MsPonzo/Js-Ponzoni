
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
  
    // Esto lo copie de un foro, no sé si se calcula así pero no encontré cómo hacerlo sino par aque no sea resultado de milisegundos
    const mesesRestantes = Math.floor(diferencia / (1000 * 3600 * 24 * 30));
    const diasRestantes = Math.floor(diferencia / (1000 * 3600 * 24));
    
    return {
      meses: mesesRestantes,
      dias: diasRestantes,
      
    };
  }
  
  
  // Pedir la fecha del turno (DD-MM)
  const fechaTurno = prompt("Ingresá la fecha del turno respetando el siguiente formato: (DD-MM)");
  
  // esto recomendaban  tambien en el foro
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
  