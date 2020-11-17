// Se muestra u oculta la lista de países en función del input viaje al exterior (además de habilitarla o deshabilitarla).
var inputPaisVisitado = document.getElementById("pais-visitado");
inputPaisVisitado.style.display = "none";

document.getElementById("siViaje").addEventListener("click", function(e) {
  inputPaisVisitado.style.display = "block";
  inputDireccion.disabled = false;
});

document.getElementById("noViaje").addEventListener("click", function(e) {
  inputPaisVisitado.style.display = "none";
  inputDireccion.disabled = true;
});

//Se muestra u oculta el campo "Dirección" en función del input dificultad para respirar (Además de habilitar o deshabilitar).
var inputDireccion = document.getElementById("direccion");
inputDireccion.style.display = "none";

document.getElementById("siDificultadRespirar").addEventListener("click", function(e) {
  inputDireccion.style.display = "block";
  inputDireccion.disabled = false;
});

document.getElementById("noDificultadRespirar").addEventListener("click", function(e) {
  inputDireccion.style.display = "none";
  inputDireccion.disabled = true;
});

//Validación de apellido, nombre, dni, sexo, teléfono, pregunta viaje al exterior y términos y condiciones.
//Se almacenan primero los valores de los inputs, para luego poder generar la lógica de validación.
var enviar = document.getElementById('enviar');
enviar.onclick = validar;

function validar() {
  var error = 0;
  var mensajesError = "";
  var mensajeExito = "El formulario ha sido enviado con éxito.";
  var apellido = document.getElementById("apellido").value;
  var nombre = document.getElementById("nombre").value;
  var dni = document.getElementById("dni").value;
  var telefono = document.getElementById("telefono").value;
  var ciudad = document.getElementById("ciudad").value;
  var opcionSexo = document.getElementsByName("sexo");
  var opcionViaje = document.getElementsByName("viaje");
  var paisVisitado = document.getElementById("pais-visitado");
  var paisVisitadoComprobacion = document.getElementById("pais-visitado2");
  var opcionFiebre = document.getElementsByName("fiebre");
  var opcionDolorCabeza = document.getElementsByName("dolor-cabeza");
  var opcionTos = document.getElementsByName("tos");
  var opcionDolorGarganta = document.getElementsByName("dolor-garganta");
  var opcionDificultadRespirar = document.getElementsByName("dificultad-para-respirar");
  var dificultadRespirarComprobacion = document.getElementById("direccion");

  //Se comprueba que input apellido no esté vacío.
  if (apellido.length == 0) {
    error++;
    mensajesError += "<p>El campo apellido es obligatorio.</p>";
  }
  //Lo mismo con nombre.
  if (nombre.length == 0) {
    error++;
    mensajesError += "<p>El campo nombre es obligatorio.</p>";
  }

  //Se comprueba si el dni es un número y no este vacio.
  if (isNaN(dni) || dni.length == 0) {
    error++;
    mensajesError += "<p>El campo DNI es obligatorio y debe ser un número.</p>";
  }

  //Se comprueba si el teléfono es un número y no este vacio.
  if (isNaN(telefono) || telefono.length == 0) {
    error++;
    mensajesError += "<p>El campo teléfono es obligatorio y debe ser un número.</p>";
  }

  /*
  // OPCIONALES, VALIDACIONES NO PEDIDAS EN LA EDA.

  //Validación de Ciudad.
  if (ciudad.length == 0) {
    error++;
    mensajesError += "<p>El campo ciudad es obligatorio.</p>";
  }

  //Validación de sexo.
  var seleccionSexo = false;
  for (i in opcionSexo) {
    if (opcionSexo[i].checked) {
      seleccionSexo = true;
    }
  }
  if (!seleccionSexo) {
    error++;
    mensajesError += "<p>Es obligatorio indicar sexo.</p>";
  }
*/

  //Validación pregunta viaje al exterior.
  var seleccionViaje = false;
  for (i in opcionViaje) {
    if (opcionViaje[i].checked) {
      seleccionViaje = true;
    }
  }
  if (!seleccionViaje) {
    error++;
    mensajesError += "<p>Es obligatorio responder si ha viajado.</p>";
  }

  //Si contesto que viajo al exterior, debe indicar a que pais ha viajado.
  if (paisVisitadoComprobacion.value == 0 && opcionViaje[0].checked) {
    error++;
    mensajesError += "<p>Debe indicar a que país ha viajado</p>";
  }

  //Si contesto que tiene dificultades para respirar, debe indicar una dirección.
  if (dificultadRespirarComprobacion.value.length == 0 && opcionDificultadRespirar[0].checked) {
    error++;
    mensajesError += "<p>Debe ingresar una dirección</p>";
  }

  //Se verifica respuesta a preguntas de síntomas.
  var seleccionFiebre = false;
  for (i in opcionFiebre) {
    if (opcionFiebre[i].checked) {
      seleccionFiebre = true;
    }
  }

  var seleccionDolorCabeza = false;
  for (i in opcionDolorCabeza) {
    if (opcionDolorCabeza[i].checked) {
      seleccionDolorCabeza = true;
    }
  }

  var seleccionTos = false;
  for (i in opcionTos) {
    if (opcionTos[i].checked) {
      seleccionTos = true;
    }
  }

  var seleccionDolorGarganta = false;
  for (i in opcionDolorGarganta) {
    if (opcionDolorGarganta[i].checked) {
      seleccionDolorGarganta = true;
    }
  }

  var seleccionDificultadRespirar = false;
  for (i in opcionDificultadRespirar) {
    if (opcionDificultadRespirar[i].checked) {
      seleccionDificultadRespirar = true;
    }
  }

  //Si no respondió a todas las preguntas, se arroja mensaje indican obligatoriedad.
  if (
    !seleccionFiebre ||
    !seleccionDolorCabeza ||
    !seleccionTos ||
    !seleccionDolorGarganta ||
    !seleccionDificultadRespirar
  ) {
    error++;
    mensajesError +=
      "<p>Todas las preguntas de sintomatología son obligatorias.</p>";
  }

  /*Se valida aceptación de términos y condiciones.
  if (document.getElementById("condiciones").checked == 0) {
    error++;
    mensajesError +=
      "<p>Tienes que aceptar los términos y condiciones para enviar el formulario.</p>";
  } */

  //Se cuentan la cantidad de síntomas compatibles.
  var sintomasCompatibles = 0;
  if (opcionFiebre[0].checked) {
    sintomasCompatibles++;
  }
  if (opcionDolorCabeza[0].checked) {
    sintomasCompatibles++;
  }
  if (opcionTos[0].checked) {
    sintomasCompatibles++;
  }
  if (opcionDolorGarganta[0].checked) {
    sintomasCompatibles++;
  }
  if (opcionDificultadRespirar[0].checked) {
    sintomasCompatibles++;
  }

  //Se arrojan mensajes de error o de éxito según corresponda.
  //En caso de no haber errores en el completado del formulario, mensaje de éxito + informe cantidad de síntomas compatibles.
  if (error == 0) {
    //Se borran los mensajes de error guardados en el div con id #mensajeError, para que no se sigan mostrando. Se imprime vacío.
    document.getElementById("mensajeError").innerHTML = "";
    //Se imprime mensaje de éxito.
    document.getElementById("mensajeExito").innerHTML = mensajeExito;
    //Informe síntomas compatibles.
    document.getElementById("mensajeSintomas").innerHTML =
      sintomasCompatibles +
      " síntomas compatibles con COVID-19 fueron registrados.";
    /*Se envía el formulario.
    document.formulario.submit(); */
  } else {
    //Se imprimen mensajes de error.
    document.getElementById("mensajeError").innerHTML = mensajesError;
  }
}
