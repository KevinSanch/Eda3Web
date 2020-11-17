/*VALIDACION DE 1000 CARACTERES EN MENSAJE*/
var mensajeText = document.getElementById('mensaje');
mensajeText.onkeyup = countChars;

function countChars() {
  var maxLength = 1000;
  var strLength = document.getElementById("mensaje").value.length;

  /*SI EL LENGTH ES MAYOR AL MAXIMO, CAMBIA A COLOR ROJO*/
  if (strLength >= maxLength) {
    document.getElementById("caracteresRestantes").innerHTML = '<p style="color: red;">' + maxLength + ' /1000</p>';
  }
  /*CUANDO LA CANTIDAD DE CARACTERES SE ACERCA A LOS 1000, CAMBIA DE COLOR PARA DAR AVISO QUE SE LE ACABAN LOS MISMOS*/
  else if (strLength >= 950) {
    document.getElementById("caracteresRestantes").innerHTML = '<p style="color: rgb(255, 165, 0);">' + strLength + ' /1000</p>';
    /*SI NO CUMPLE NINGUNA CONDICION ANTERIOR, SIGUE CONTANDO LOS CARACTERES*/
  } else {
    document.getElementById("caracteresRestantes").innerHTML = strLength + ' /1000';
  }
}

var enviarFormulario = document.getElementById('boton_enviar_formulario');
enviarFormulario.onclick = validarFormulario;

function validarFormulario() {


  var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  /*EXPRESION REGULAR DE TELEFONO, QUE CONTENGA 4 NUMEROS, LUEGO EL USUARIO DEBE INGRESAR UN '-' Y OTROS 4 NUMEROS MAS*/
  var expRegTelefono = /^\d{4}-\d{4}$/;

  /*GUARDO LOS ID DE LOS INPUT DEL FORMULARIO EN VARIABLES PARA LUEGO REALIZAR SU VALIDACION*/
  var nomyapel = document.getElementById("nomyapel");
  var correo = document.getElementById("correo");
  var telefono = document.getElementById("telefono");
  var asunto = document.getElementById("asunto");
  var mensaje = document.getElementById("mensaje");



  /* VALIDO QUE EL CAMPO NO ESTE VACIO*/
  if (nomyapel.value == null || nomyapel.value == "") {
    alert("Por favor ingrese nombre y apellido");
    return false;
  }


  /*VALIDO QUE EL CAMPO NO ESTE VACIO*/
  if (!correo.value) {
    alert("Por favor, ingrese su correo electronico");
    correo.focus();
    return false;

  }
  /*VALIDO QUE EL CORREO INGRESADO TENGA SU EXPRESION REGULAR*/
  else if (!expRegEmail.exec(correo.value)) {
    alert("El campo correo electronico no es válido (example@ex.com)");
    correo.focus();
    return false;
  }

  /*VALIDO QUE EL TELEFONO NO ESTE VACIO*/
  if (!telefono.value) {
    alert("Por favor, ingrese un telefono");
    telefono.focus();
    return false;
  }
  /*VALIDO QUE EL TELEFONO INGRESADO TENGA SU EXPRESION REGULAR*/
  else if (!expRegTelefono.exec(telefono.value)) {
    alert("Por favor, ingrese un telefono valido. Ej: 4444-4444");
    telefono.focus();
    return false;
  }

  /*VALIDO QUE EL CAMPO NO ESTE VACIO*/
  if (!asunto.value) {
    alert("Por favor, ingrese el asunto del mensaje");
    return false;
  }

  /*VALIDO QUE EL CAMPO MENSAJE NO ESTE VACIO*/
  if (!mensaje.value) {
    alert("Escriba el mensaje");
    return false;
  }

}
