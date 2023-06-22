class Paciente {
  constructor(nombre, especialidad, obraSocial, costoBruto) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.obraSocial = obraSocial;
    this.costoBruto = costoBruto;
  }

  descontarObraSocial() {
    if (this.obraSocial === "true") {
      return this.costoBruto / 6;
    } else if (this.obraSocial === "false") {
      return this.costoBruto;
    }
  }
}

var arrayPaciente = [];

do {
  var comprobacion = prompt("Si desea cargar un nuevo paciente presione cualquier tecla o 'exit' para salir");

  if (comprobacion.toLowerCase() === "exit") {
    break;
  } else {
    var nombreP = prompt("Ingrese el nombre y apellido del paciente nuevo");
    var especialidadP = prompt("Ingrese la especialidad por la que consulta");
    var obraSocialP = prompt("Si tiene obra social, coloque 'true' o 'false' en caso que no tenga");
    var costoBrutoP = prompt("Ingrese el costo de la consulta en bruto");

    arrayPaciente.push(new Paciente(nombreP, especialidadP, obraSocialP, costoBrutoP));
  }

} while (comprobacion.toLowerCase() !== "exit");

console.log(arrayPaciente);

document.write("<h3>El nuevo paciente se llama " + arrayPaciente[arrayPaciente.length - 1].nombre + " y el costo de su consulta para la especialidad " + arrayPaciente[arrayPaciente.length - 1].especialidad + " es de " + arrayPaciente[arrayPaciente.length - 1].descontarObraSocial());

for (var paciente of arrayPaciente) {
  document.write("<h3>El nombre del paciente es: " + paciente.nombre);
  document.write("<h3>Que se atenderá en la especialidad: " + paciente.especialidad);
  document.write("<h3>El costo de su consulta es de: " + paciente.descontarObraSocial());
}
